package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Diretoria;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class DiretoriaForm {

    @NotNull @NotEmpty
    private String nome;
    private String cargo;

    public Diretoria criar() {
        Diretoria diretoria = new Diretoria(this.nome, this.cargo);
        return diretoria;
    }

    public String getNome() {
        return nome;
    }

    public String getCargo() {
        return cargo;
    }
}
