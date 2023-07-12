package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Perfil;
import com.alf5.udmadest.repository.PerfilRepository;

public class PerfilForm {
    private String nome;

    public Perfil cadastro(PerfilRepository perfilRepository) {
        Perfil perfil = new Perfil();
        perfil.setNome(this.nome);
        return perfil;
    }

    public String getNome() {
        return nome;
    }
}
