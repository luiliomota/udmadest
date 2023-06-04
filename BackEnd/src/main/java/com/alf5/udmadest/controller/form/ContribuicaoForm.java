package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Congregacao;
import com.alf5.udmadest.model.Contribuicao;
import com.alf5.udmadest.repository.CongregacaoRepository;

import java.math.BigDecimal;
import java.time.LocalDate;

public class ContribuicaoForm {
    private Long idCongregacao;
    private LocalDate dataContribuicao;
    private String carne;
    private String oferta;

    public Contribuicao registrar(CongregacaoRepository congregacaoRepository) {
            if(congregacaoRepository.existsById(this.idCongregacao)) {
            Contribuicao contribuicao = new Contribuicao();
            Congregacao congregacao = congregacaoRepository.getReferenceById(this.idCongregacao);
            contribuicao.setCongregacao(congregacao);
            contribuicao.setDataContribuicao(this.dataContribuicao);
            contribuicao.setCarne(new BigDecimal(this.carne));
            contribuicao.setOferta(new BigDecimal(this.oferta));
            return contribuicao;
        }
        return null;
    }

    public Long getIdCongregacao() {
        return idCongregacao;
    }

    public LocalDate getDataContribuicao() {
        return dataContribuicao;
    }

    public String getCarne() {
        return carne;
    }

    public String getOferta() {
        return oferta;
    }
}
