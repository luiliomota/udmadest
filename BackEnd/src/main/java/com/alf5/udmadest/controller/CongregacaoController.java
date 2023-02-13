package com.alf5.udmadest.controller;

import com.alf5.udmadest.controller.dto.CongregacaoDto;
import com.alf5.udmadest.controller.form.CongregacaoForm;
import com.alf5.udmadest.model.Congregacao;
import com.alf5.udmadest.repository.CongregacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import java.net.URI;

@RestController
@RequestMapping("api/congregacao")
public class CongregacaoController {

    @Autowired
    private CongregacaoRepository congregacaoRepository;

    //Criar Congregação
    @PostMapping
    public ResponseEntity<CongregacaoDto> criarCongregacao(@RequestBody CongregacaoForm form, UriComponentsBuilder uriComponentsBuilder) {
        Congregacao congregacao = form.criar();
        congregacaoRepository.save(congregacao);
        URI uri = uriComponentsBuilder.path("/api/congregacao/{id}").buildAndExpand(congregacao.getId()).toUri();
        return ResponseEntity.created(uri).body(new CongregacaoDto(congregacao));
    }

    //Exibir congregação por id
    @GetMapping("/{id}")
    public ResponseEntity<CongregacaoDto> exibeCongregacaoPorId(@PathVariable Long id) {
        if(congregacaoRepository.existsById(id)){
            Congregacao congregacao = congregacaoRepository.getReferenceById(id);
            return ResponseEntity.ok(new CongregacaoDto(congregacao));
        }
        return ResponseEntity.notFound().build();
    }

    //Exibir lista de congregações
    @GetMapping
    public Page<CongregacaoDto> listaDeCongregacoes(Pageable paginacao) {
        Page<Congregacao> congregacoes = congregacaoRepository.findAll(paginacao);
        return CongregacaoDto.converter(congregacoes);
    }

    //Excluir congregação por id
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> remover(@PathVariable Long id) {
        if(congregacaoRepository.existsById(id)){
            congregacaoRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}

