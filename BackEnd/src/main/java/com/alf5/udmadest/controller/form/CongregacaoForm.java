package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Congregacao;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class CongregacaoForm {

    @NotNull @NotEmpty
    private String nome;

    public Congregacao criar() {
        Congregacao congregacao = new Congregacao(this.nome);
        return congregacao;
    }

    public String getNome() {
        return nome;
    }
}
