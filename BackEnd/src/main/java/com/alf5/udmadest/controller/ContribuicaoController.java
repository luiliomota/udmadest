package com.alf5.udmadest.controller;

import com.alf5.udmadest.controller.dto.ContribuicaoDto;
import com.alf5.udmadest.controller.form.ContribuicaoForm;
import com.alf5.udmadest.controller.form.EditarContribuicao;
import com.alf5.udmadest.model.Contribuicao;
import com.alf5.udmadest.repository.CongregacaoRepository;
import com.alf5.udmadest.repository.ContribuicaoRepository;
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
@RequestMapping("api/contribuicao")
public class ContribuicaoController {

    @Autowired
    private CongregacaoRepository congregacaoRepository;
    @Autowired
    private ContribuicaoRepository contribuicaoRepository;
    @Autowired
    private MesReferenciaRepository mesReferenciaRepository;

    //Registrar Contribuição
    @PostMapping
    public ResponseEntity<ContribuicaoDto> registrarContribuicao(@RequestBody @Valid ContribuicaoForm form, UriComponentsBuilder uriComponentsBuilder) {
        Contribuicao contribuicao = form.registrar(congregacaoRepository, mesReferenciaRepository);
        if(contribuicao != null){
            contribuicaoRepository.save(contribuicao);
            URI uri = uriComponentsBuilder.path("/api/contribuicao/{id}").buildAndExpand(contribuicao.getId()).toUri();
            return ResponseEntity.created(uri).body(new ContribuicaoDto(contribuicao));
        }
        return ResponseEntity.notFound().build();
    }

    //Exibir contribuição por id
    @GetMapping("/{id}")
    public ResponseEntity<ContribuicaoDto> exibeContribuicaoPorId(@PathVariable Long id) {
        if(contribuicaoRepository.existsById(id)){
            Contribuicao contribuicao = contribuicaoRepository.getReferenceById(id);
            return ResponseEntity.ok(new ContribuicaoDto(contribuicao));
        }
        return ResponseEntity.notFound().build();
    }

    //Exibir lista de contribuições
    @GetMapping
    public Page<ContribuicaoDto> listaDeContribuicoes(Pageable paginacao) {
        Page<Contribuicao> contribuicoes = contribuicaoRepository.findAll(paginacao);
        return ContribuicaoDto.converter(contribuicoes);
    }

    //Excluir contribuição por id
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        if(contribuicaoRepository.existsById(id)){
            contribuicaoRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    //Editar contribuicao por id
    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<ContribuicaoDto> editarContribuicao(@PathVariable Long id, @RequestBody @Valid EditarContribuicao form) {
        if(contribuicaoRepository.existsById(id)){
            Contribuicao contribuicao = form.editar(id, contribuicaoRepository, congregacaoRepository, mesReferenciaRepository);
            return ResponseEntity.ok(new ContribuicaoDto(contribuicao));
        }
        return ResponseEntity.notFound().build();
    }
}

