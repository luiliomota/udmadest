package com.alf5.udmadest.controller.dto;

import com.alf5.udmadest.model.Perfil;
import com.alf5.udmadest.model.Usuario;

public class TokenUsuarioDto {
    private Long id;
    private String nome;
    private String email;
    private String perfil;

    public TokenUsuarioDto(Usuario usuario) {
        this.id = usuario.getId();
        this.nome = usuario.getNome();
        this.email = usuario.getEmail();
        for (Perfil p : usuario.getPerfis()) {
            this.perfil = p.getNome();
        }
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getPerfil() {
        return perfil;
    }
}
