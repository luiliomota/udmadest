package com.alf5.udmadest.controller;

import com.alf5.udmadest.controller.dto.ConsideracaoDto;
import com.alf5.udmadest.controller.form.ConsideracaoForm;
import com.alf5.udmadest.controller.form.EditarConsideracao;
import com.alf5.udmadest.model.Consideracao;
import com.alf5.udmadest.repository.ConsideracaoRepository;
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
@RequestMapping("api/consideracao")
public class ConsideracaoController {

    @Autowired
    private ConsideracaoRepository consideracaoRepository;

    //Registrar Consideracao
    @PostMapping
    public ResponseEntity<ConsideracaoDto> registrarConsideracao(@RequestBody @Valid ConsideracaoForm form, UriComponentsBuilder uriComponentsBuilder) {
        Consideracao consideracao = form.registrar(consideracaoRepository);
        if(consideracao != null){
            consideracaoRepository.save(consideracao);
            URI uri = uriComponentsBuilder.path("/api/consideracao/{id}").buildAndExpand(consideracao.getId()).toUri();
            return ResponseEntity.created(uri).body(new ConsideracaoDto(consideracao));
        }
        return ResponseEntity.notFound().build();
    }

    //Exibir consideracao por id
    @GetMapping("/{id}")
    public ResponseEntity<ConsideracaoDto> exibeConsideracaoPorId(@PathVariable Long id) {
        if(consideracaoRepository.existsById(id)){
            Consideracao consideracao = consideracaoRepository.getReferenceById(id);
            return ResponseEntity.ok(new ConsideracaoDto(consideracao));
        }
        return ResponseEntity.notFound().build();
    }

    //Exibir lista de consideracoes
    @GetMapping
    public Page<ConsideracaoDto> listaDeConsideracoes(Pageable paginacao) {
        Page<Consideracao> consideracoes = consideracaoRepository.findAll(paginacao);
        return ConsideracaoDto.converter(consideracoes);
    }

    //Excluir consideracoes por id
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        if(consideracaoRepository.existsById(id)){
            consideracaoRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    //Editar consideracao por id
    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<ConsideracaoDto> editarConsideracao(@PathVariable Long id, @RequestBody @Valid EditarConsideracao form) {
        if(consideracaoRepository.existsById(id)){
            Consideracao consideracao = form.editar(id, consideracaoRepository);
            return ResponseEntity.ok(new ConsideracaoDto(consideracao));
        }
        return ResponseEntity.notFound().build();
    }
}

