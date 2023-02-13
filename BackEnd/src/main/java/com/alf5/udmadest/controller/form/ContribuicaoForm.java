package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Congregacao;
import com.alf5.udmadest.model.Contribuicao;
import com.alf5.udmadest.repository.CongregacaoRepository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class ContribuicaoForm {
    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private Long idCongregacao;
    private String dataContribuicao;
    private String carne;
    private String oferta;

    public Contribuicao registrar(CongregacaoRepository congregacaoRepository) {
        if(congregacaoRepository.existsById(this.idCongregacao)){
            Contribuicao contribuicao = new Contribuicao();
            Congregacao congregacao = congregacaoRepository.getReferenceById(this.idCongregacao);
            contribuicao.setCongregacao(congregacao);
            contribuicao.setDataContribuicao(LocalDate.parse(this.dataContribuicao, formatter));
            contribuicao.setCarne(new BigDecimal(this.carne));
            contribuicao.setOferta(new BigDecimal(this.oferta));
            return contribuicao;
        }
        return null;
    }

    public Long getIdCongregacao() {
        return idCongregacao;
    }

    public String getDataContribuicao() {
        return dataContribuicao;
    }

    public String getCarne() {
        return carne;
    }

    public String getOferta() {
        return oferta;
    }
}
