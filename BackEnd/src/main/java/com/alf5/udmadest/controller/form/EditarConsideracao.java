package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Consideracao;
import com.alf5.udmadest.repository.ConsideracaoRepository;

import java.time.LocalDate;

public class EditarConsideracao {
    private String descricao;
    private LocalDate mesReferenciaDate;

    public Consideracao editar(Long id, ConsideracaoRepository consideracaoRepository) {
        Consideracao consideracao = consideracaoRepository.getReferenceById(id);
        consideracao.setDescricao(this.descricao);
        consideracao.setMesReferencia(this.mesReferenciaDate);
        return consideracao;
    }

    public String getDescricao() {
        return descricao;
    }

    public LocalDate getMesReferenciaDate() {
        return mesReferenciaDate;
    }
}
