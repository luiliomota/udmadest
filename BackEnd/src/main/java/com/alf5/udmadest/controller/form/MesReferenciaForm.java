package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.MesReferencia;
import com.alf5.udmadest.repository.MesReferenciaRepository;

public class MesReferenciaForm {
    private String nome;

    public MesReferencia cadastro(MesReferenciaRepository mesReferenciaRepository) {
        MesReferencia mesReferencia = new MesReferencia();
        mesReferencia.setNome(this.nome);
        return mesReferencia;
    }

    public String getNome() {
        return nome;
    }
}
