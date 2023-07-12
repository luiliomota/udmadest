package com.alf5.udmadest.controller;

import com.alf5.udmadest.config.security.TokenService;
import com.alf5.udmadest.controller.dto.TokenUsuarioDto;
import com.alf5.udmadest.controller.dto.UsuarioDto;
import com.alf5.udmadest.controller.form.AtualizarUsuarioForm;
import com.alf5.udmadest.controller.form.UsuarioForm;
import com.alf5.udmadest.model.Usuario;
import com.alf5.udmadest.repository.PerfilRepository;
import com.alf5.udmadest.repository.UsuarioRepository;
import org.apache.coyote.Response;
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
@RequestMapping("api/usuario")
@Transactional
public class UsuarioController {
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private PerfilRepository perfilRepository;
    @Autowired
    private TokenService tokenService;

    //Cadastro de novo usuário
    @PostMapping
    @Transactional
    public ResponseEntity<UsuarioDto> cadastrar(@RequestBody @Valid UsuarioForm form, UriComponentsBuilder uriBuilder){
        Usuario usuario = form.cadastro(perfilRepository);
        if (usuario == null){
            ResponseEntity.badRequest().build();
        }
        usuarioRepository.save(usuario);
        URI uri = uriBuilder.path("/api/usuario/{id}").buildAndExpand(usuario.getId()).toUri();
        return ResponseEntity.created(uri).body(new UsuarioDto(usuario));
    }

    //Busca de todos os usuários cadastrados
    @GetMapping
    public Page<UsuarioDto> listaUsuarios (Pageable paginacao){
        Page<Usuario> usuarios = usuarioRepository.findAll(paginacao);
        return UsuarioDto.converter(usuarios);
    }

    //Busca de usuário por id
    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDto> usuarioPorId (@PathVariable Long id){
        if (usuarioRepository.existsById(id)){
            Usuario usuario = usuarioRepository.findById(id).get();
            return ResponseEntity.ok().body(new UsuarioDto(usuario));
        }
        return ResponseEntity.notFound().build();
    }

    //Busca de usuário por token
    @GetMapping("/token/{token}")
    public ResponseEntity<TokenUsuarioDto> usuarioPorToken (@PathVariable String token){
        Long idUsuario = tokenService.getIdUsuario(token);
        if (idUsuario == null){
            return ResponseEntity.notFound().build();
        }
        Usuario usuario = usuarioRepository.getReferenceById(idUsuario);
        return ResponseEntity.ok(new TokenUsuarioDto(usuario));
    }

    //Atualização de usuário
    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<UsuarioDto> atualizar (@PathVariable Long id, @RequestBody @Valid AtualizarUsuarioForm form){
        if (usuarioRepository.existsById(id)){
            Usuario usuario = form.atualizar(id, usuarioRepository, perfilRepository);
            if (usuario == null) {
                return ResponseEntity.badRequest().build();
            }
            usuarioRepository.save(usuario);
            return ResponseEntity.ok(new UsuarioDto(usuario));
        }
        return ResponseEntity.notFound().build();
    }

    //Remoção de usuário
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> remover (@PathVariable Long id){
        if (usuarioRepository.existsById(id)){
            usuarioRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
