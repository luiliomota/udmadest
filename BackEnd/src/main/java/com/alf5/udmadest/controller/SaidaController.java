package com.alf5.udmadest.controller;

import com.alf5.udmadest.controller.dto.SaidaDto;
import com.alf5.udmadest.controller.form.EditarSaida;
import com.alf5.udmadest.controller.form.SaidaForm;
import com.alf5.udmadest.model.Saida;
import com.alf5.udmadest.repository.SaidaRepository;
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
@RequestMapping("api/saida")
public class SaidaController {

    @Autowired
    private SaidaRepository saidaRepository;

    //Registrar Saida
    @PostMapping
    public ResponseEntity<SaidaDto> registrarSaida(@RequestBody @Valid SaidaForm form, UriComponentsBuilder uriComponentsBuilder) {
        Saida saida = form.registrar(saidaRepository);
        if(saida != null){
            saidaRepository.save(saida);
            URI uri = uriComponentsBuilder.path("/api/saida/{id}").buildAndExpand(saida.getId()).toUri();
            return ResponseEntity.created(uri).body(new SaidaDto(saida));
        }
        return ResponseEntity.notFound().build();
    }

    //Exibir saida por id
    @GetMapping("/{id}")
    public ResponseEntity<SaidaDto> exibeSaidaPorId(@PathVariable Long id) {
        if(saidaRepository.existsById(id)){
            Saida saida = saidaRepository.getReferenceById(id);
            return ResponseEntity.ok(new SaidaDto(saida));
        }
        return ResponseEntity.notFound().build();
    }

    //Exibir lista de saidas
    @GetMapping
    public Page<SaidaDto> listaDeSaidas(Pageable paginacao) {
        Page<Saida> saidas = saidaRepository.findAll(paginacao);
        return SaidaDto.converter(saidas);
    }

    //Excluir saida por id
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        if(saidaRepository.existsById(id)){
            saidaRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    //Editar saida por id
    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<SaidaDto> editarSaida(@PathVariable Long id, @RequestBody @Valid EditarSaida form) {
        if(saidaRepository.existsById(id)){
            Saida saida = form.editar(id, saidaRepository);
            return ResponseEntity.ok(new SaidaDto(saida));
        }
        return ResponseEntity.notFound().build();
    }
}

