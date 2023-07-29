package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Congregacao;
import com.alf5.udmadest.model.Contribuicao;
import com.alf5.udmadest.model.MesReferencia;
import com.alf5.udmadest.repository.CongregacaoRepository;
import com.alf5.udmadest.repository.MesReferenciaRepository;

import java.math.BigDecimal;
import java.time.LocalDate;

public class ContribuicaoForm {
    private Long idCongregacao;
    private LocalDate dataContribuicao;
    private String carne;
    private String oferta;

    public Contribuicao registrar(CongregacaoRepository congregacaoRepository, MesReferenciaRepository mesReferenciaRepository) {
            if(congregacaoRepository.existsById(this.idCongregacao)) {
                Contribuicao contribuicao = new Contribuicao();
                Congregacao congregacao = congregacaoRepository.getReferenceById(this.idCongregacao);
                contribuicao.setCongregacao(congregacao);
                contribuicao.setCarne(new BigDecimal(this.carne.replace(",",".")));
                contribuicao.setOferta(new BigDecimal(this.oferta.replace(",",".")));
                if (this.dataContribuicao != null) {
                    contribuicao.setDataContribuicao(this.dataContribuicao);
                    MesReferencia mesReferencia = new MesReferencia();
                    String mesReferenciaNome = new String(nomeMes(this.dataContribuicao.getMonthValue()) + "/" + this.dataContribuicao.getYear());
                    if (mesReferenciaRepository.existsByNome(mesReferenciaNome)) {
                        mesReferencia = mesReferenciaRepository.findByNome(mesReferenciaNome);
                    } else {
                        mesReferencia = new MesReferencia(mesReferenciaNome);
                        mesReferenciaRepository.save(mesReferencia);
                    }
                    contribuicao.setMesReferencia(mesReferencia);
                }
                return contribuicao;
            }
        return null;
    }

    private String nomeMes (int mes) {
        switch (mes){
            case 1:
                return "Janeiro";
            case 2:
                return "Fevereiro";
            case 3:
                return "Março";
            case 4:
                return "Abril";
            case 5:
                return "Maio";
            case 6:
                return "Junho";
            case 7:
                return "Julho";
            case 8:
                return "Agosto";
            case 9:
                return "Setembro";
            case 10:
                return "Outubro";
            case 11:
                return "Novembro";
            case 12:
                return "Dezembro";
            default:
                return null;
        }
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
