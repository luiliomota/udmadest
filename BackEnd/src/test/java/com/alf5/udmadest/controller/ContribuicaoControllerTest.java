package com.alf5.udmadest.controller;

import com.alf5.udmadest.model.Congregacao;
import com.alf5.udmadest.model.Contribuicao;
import com.alf5.udmadest.repository.CongregacaoRepository;
import com.alf5.udmadest.repository.ContribuicaoRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.math.BigDecimal;
import java.net.URI;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest
public class ContribuicaoControllerTest {

    @Autowired
    private CongregacaoRepository congregacaoRepository;
    @Autowired
    private ContribuicaoRepository contribuicaoRepository;
    @Autowired
    private MockMvc mockMvc;
    //Teste para criar uma contribuição
    @Test
    public void deveRetornarStatus201EValorContribuicaoNoJsonDeResposta() throws Exception {
        Congregacao congregacao = new Congregacao("Galileia");
        congregacaoRepository.save(congregacao);
        var carne = new BigDecimal("200.5");
        var oferta = new BigDecimal("100.25");
        URI uri = new URI("/api/contribuicao");
        String json = "{\"idCongregacao\":\"" + congregacao.getId() + "\"," +
                "\"carne\":\"" + carne + "\"," +
                "\"oferta\":\"" + oferta + "\"}";

        mockMvc.perform(MockMvcRequestBuilders
                        .post(uri)
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers
                        .status()
                        .is(201))
                .andExpect(MockMvcResultMatchers
                        .content()
                        .json("{\"carne\": " + carne + "," +
                                "\"oferta\": " + oferta + "}"));
    }

    //Teste para exibir contribuição por ID
    @Test
    public void deveRetornarStatus200EIdENomeDaCongregacaoNoJsonDeResposta() throws Exception {
        Congregacao congregacao = new Congregacao("Naiote");
        congregacaoRepository.save(congregacao);
        Contribuicao contribuicao = new Contribuicao();
        contribuicao.setCongregacao(congregacao);
        contribuicaoRepository.save(contribuicao);
        URI uri = new URI("/api/contribuicao/"+contribuicao.getId());

        mockMvc.perform(MockMvcRequestBuilders
                .get(uri)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers
                        .status()
                        .is(200))
                .andExpect(MockMvcResultMatchers
                        .content()
                        .json("{\"id\": " + contribuicao.getId() + "," +
                                "\"nomeCongregacao\": " + contribuicao.getCongregacao().getNome() + "}"));
    }
}
