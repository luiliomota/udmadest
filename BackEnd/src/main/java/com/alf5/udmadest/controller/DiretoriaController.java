package com.alf5.udmadest.controller;

import com.alf5.udmadest.controller.dto.DiretoriaDto;
import com.alf5.udmadest.controller.form.DiretoriaForm;
import com.alf5.udmadest.controller.form.EditarDiretoria;
import com.alf5.udmadest.model.Diretoria;
import com.alf5.udmadest.repository.DiretoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("api/diretoria")
public class DiretoriaController {

    @Autowired
    private DiretoriaRepository diretoriaRepository;

    //Criar Diretoria
    @PostMapping
    public ResponseEntity<DiretoriaDto> criarDiretoria(@RequestBody @Valid DiretoriaForm form, UriComponentsBuilder uriComponentsBuilder) {
        Diretoria diretoria = form.criar();
        diretoriaRepository.save(diretoria);
        URI uri = uriComponentsBuilder.path("/api/diretoria/{id}").buildAndExpand(diretoria.getId()).toUri();
        return ResponseEntity.created(uri).body(new DiretoriaDto(diretoria));
    }

    //Exibir diretoria por id
    @GetMapping("/{id}")
    public ResponseEntity<DiretoriaDto> exibeDiretoriaPorId(@PathVariable Long id) {
        if(diretoriaRepository.existsById(id)){
            Diretoria diretoria = diretoriaRepository.getReferenceById(id);
            return ResponseEntity.ok(new DiretoriaDto(diretoria));
        }
        return ResponseEntity.notFound().build();
    }

    //Exibir lista de diretorias
    @GetMapping
    public Page<DiretoriaDto> listaDeDiretorias(Pageable paginacao) {
        Page<Diretoria> diretorias = diretoriaRepository.findAll(paginacao);
        return DiretoriaDto.converter(diretorias);
    }

    //Excluir diretoria por id
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> remover(@PathVariable Long id) {
        if(diretoriaRepository.existsById(id)){
            diretoriaRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    //Editar diretoria por id
    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<DiretoriaDto> editarDiretoria(@PathVariable Long id, @RequestBody @Valid EditarDiretoria form) {
        if(diretoriaRepository.existsById(id)){
            Diretoria diretoria = form.editar(id, diretoriaRepository);
            return ResponseEntity.ok(new DiretoriaDto(diretoria));
        }
        return ResponseEntity.notFound().build();
    }
}

