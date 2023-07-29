package com.alf5.udmadest.controller;

import com.alf5.udmadest.controller.dto.MesReferenciaDto;
import com.alf5.udmadest.controller.form.MesReferenciaForm;
import com.alf5.udmadest.model.MesReferencia;
import com.alf5.udmadest.repository.MesReferenciaRepository;
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
@RequestMapping("/api/mesReferencia")
public class MesReferenciaController {

    @Autowired
    private MesReferenciaRepository mesReferenciaRepository;

    //Registrar MesReferencia
    @PostMapping
    public ResponseEntity<MesReferenciaDto> registrarMesReferencia (@RequestBody @Valid MesReferenciaForm form, UriComponentsBuilder uriComponentsBuilder) {
        MesReferencia mesReferencia = form.cadastro(mesReferenciaRepository);
        if (mesReferencia != null) {
            mesReferenciaRepository.save(mesReferencia);
            URI uri = uriComponentsBuilder.path("/api/mesReferencia/{id}").buildAndExpand(mesReferencia.getId()).toUri();
            return ResponseEntity.created(uri).body(new MesReferenciaDto(mesReferencia));
        }
        return ResponseEntity.notFound().build();
    }

    //Exibir mesReferencia por id
    @GetMapping("/{id}")
    public ResponseEntity<MesReferenciaDto> exibeMesesReferenciaPorId (@PathVariable Long id) {
        if (mesReferenciaRepository.existsById(id)) {
            MesReferencia mesReferencia = mesReferenciaRepository.getReferenceById(id);
            return ResponseEntity.ok(new MesReferenciaDto(mesReferencia));
        }
        return ResponseEntity.notFound().build();
    }

    //Exibe lista de MesReferencia
    @GetMapping
    public Page<MesReferenciaDto> listaMesReferencia (Pageable paginacao) {
        Page<MesReferencia> mesesReferencia = mesReferenciaRepository.findAll(paginacao);
        return MesReferenciaDto.converter(mesesReferencia);
    }

    //Excluir mesReferencia por id
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> eliminar (@PathVariable Long id) {
        if (mesReferenciaRepository.existsById(id)) {
            mesReferenciaRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

}
