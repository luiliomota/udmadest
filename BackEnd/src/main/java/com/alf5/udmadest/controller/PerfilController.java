package com.alf5.udmadest.controller;

import com.alf5.udmadest.controller.dto.PerfilDto;
import com.alf5.udmadest.controller.form.PerfilForm;
import com.alf5.udmadest.model.Perfil;
import com.alf5.udmadest.repository.PerfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("api/perfil")
public class PerfilController {

    @Autowired
    private PerfilRepository perfilRepository;

    //Busca de todos os perfis de usuário
    @GetMapping
    public Page<PerfilDto> listaPerfis (Pageable paginacao){
        Page<Perfil> perfis = perfilRepository.findAll(paginacao);
        return PerfilDto.converter (perfis);
    }

    //Cria perfil
    @PostMapping
    public ResponseEntity<PerfilDto> novoPerfil (@RequestBody @Valid PerfilForm form, UriComponentsBuilder uriBuilder){
        Perfil perfil = form.cadastro (perfilRepository);
        if (perfil == null){
            ResponseEntity.badRequest().build();
        }
        perfilRepository.save(perfil);
        URI uri = uriBuilder.path("/api/perfil/{id}").buildAndExpand(perfil.getId()).toUri();
        return ResponseEntity.created(uri).body(new PerfilDto(perfil));
    }

    //Busca de perfil por id
    @GetMapping("/{id}")
    public ResponseEntity<PerfilDto> perfilPorId(@PathVariable Long id) {
        if (perfilRepository.existsById(id)) {
            Perfil perfil = perfilRepository.getReferenceById(id);
            return ResponseEntity.ok().body(new PerfilDto(perfil));
        }
        return ResponseEntity.notFound().build();
    }
}
