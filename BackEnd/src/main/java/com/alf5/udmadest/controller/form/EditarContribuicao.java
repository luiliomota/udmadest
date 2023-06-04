package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Congregacao;
import com.alf5.udmadest.model.Contribuicao;
import com.alf5.udmadest.repository.CongregacaoRepository;
import com.alf5.udmadest.repository.ContribuicaoRepository;

import java.math.BigDecimal;
import java.time.LocalDate;

public class EditarContribuicao {
    private Long idCongregacao;
    private LocalDate dataContribuicaoDate;
    private BigDecimal carne;
    private BigDecimal oferta;

    public Contribuicao editar(Long id, ContribuicaoRepository contribuicaoRepository, CongregacaoRepository congregacaoRepository) {
        Contribuicao contribuicao = contribuicaoRepository.getReferenceById(id);
        Congregacao congregacao = congregacaoRepository.getReferenceById(this.idCongregacao);
        contribuicao.setCongregacao(congregacao);
        contribuicao.setDataContribuicao(this.dataContribuicaoDate);
        contribuicao.setCarne(this.carne);
        contribuicao.setOferta(this.oferta);
        return contribuicao;
    }

    public LocalDate getDataContribuicaoDate() {
        return dataContribuicaoDate;
    }

    public Long getIdCongregacao() {
        return idCongregacao;
    }

    public BigDecimal getCarne() {
        return carne;
    }

    public BigDecimal getOferta() {
        return oferta;
    }
}
