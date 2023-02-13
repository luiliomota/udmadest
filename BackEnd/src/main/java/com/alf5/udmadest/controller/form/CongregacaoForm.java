package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Congregacao;

public class CongregacaoForm {

    private String nome;

    public Congregacao criar() {
        Congregacao congregacao = new Congregacao(this.nome);
        return congregacao;
    }

    public String getNome() {
        return nome;
    }
}
