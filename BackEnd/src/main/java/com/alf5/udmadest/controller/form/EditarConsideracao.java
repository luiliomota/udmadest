package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Consideracao;
import com.alf5.udmadest.model.MesReferencia;
import com.alf5.udmadest.repository.ConsideracaoRepository;
import com.alf5.udmadest.repository.MesReferenciaRepository;

import java.time.LocalDate;

public class EditarConsideracao {
    private String descricao;
    private LocalDate dataConsideracao;

    public Consideracao editar(Long id, ConsideracaoRepository consideracaoRepository, MesReferenciaRepository mesReferenciaRepository) {
        Consideracao consideracao = consideracaoRepository.getReferenceById(id);
        consideracao.setDescricao(this.descricao);
        consideracao.setDataConsideracao(this.dataConsideracao);
        MesReferencia mesReferencia = new MesReferencia();
        String mesReferenciaNome = new String(nomeMes(this.dataConsideracao.getMonthValue()) + "/" + this.dataConsideracao.getYear());
        if (mesReferenciaRepository.existsByNome(mesReferenciaNome)) {
            mesReferencia = mesReferenciaRepository.findByNome(mesReferenciaNome);
        } else {
            mesReferencia = new MesReferencia(mesReferenciaNome);
            mesReferenciaRepository.save(mesReferencia);
        }
        consideracao.setMesReferencia(mesReferencia);

        return consideracao;
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

    public String getDescricao() {
        return descricao;
    }

    public LocalDate getDataConsideracao() {
        return dataConsideracao;
    }
}
