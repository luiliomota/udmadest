package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Congregacao;
import com.alf5.udmadest.repository.CongregacaoRepository;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class EditarCongregacao {
    @NotNull @NotEmpty
    private String nome;

    public Congregacao editar(Long id, CongregacaoRepository congregacaoRepository) {
        Congregacao congregacao = congregacaoRepository.getReferenceById(id);
        congregacao.setNome(this.nome);
        return congregacao;
    }

    public String getNome() {
        return nome;
    }
}
