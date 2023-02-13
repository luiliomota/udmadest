package com.alf5.udmadest.controller;

import com.alf5.udmadest.model.Congregacao;
import com.alf5.udmadest.repository.CongregacaoRepository;
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

import java.net.URI;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest
public class CongregacaoControllerTest {

    @Autowired
    private CongregacaoRepository congregacaoRepository;
    @Autowired
    private MockMvc mockMvc;
    //Teste para criar uma congregação
    @Test
    public void deveRetornarStatus201ENomeDaCongregacaoNoJsonDeResposta() throws Exception {
        URI uri = new URI("/api/congregacao/");
        String nome = new String("Naiote");
        String json = "{\"nome\":\"" + nome + "\"}";

        mockMvc.perform(MockMvcRequestBuilders
                        .post(uri)
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers
                        .status()
                        .is(201))
                .andExpect(MockMvcResultMatchers
                        .content()
                        .json("{\"nome\": \"" + nome + "\"}"));
    }

    //Teste para exibir congregação por ID
    @Test
    public void deveRetornarStatus200EIdENomeDaCongregacaoNoJsonDeResposta() throws Exception {
        Congregacao congregacao = new Congregacao("Naiote");
        congregacaoRepository.save(congregacao);
        URI uri = new URI("/api/congregacao/"+congregacao.getId());

        mockMvc.perform(MockMvcRequestBuilders
                .get(uri)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers
                        .status()
                        .is(200))
                .andExpect(MockMvcResultMatchers
                        .content()
                        .json("{\"id\": " + congregacao.getId() + "," +
                                "\"nome\": " + congregacao.getNome() + "}"));
    }
}
