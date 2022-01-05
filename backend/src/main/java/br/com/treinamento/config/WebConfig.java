package br.com.treinamento.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Arrays;

import static java.util.Arrays.asList;

@EnableWebSecurity
class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedMethods(asList("*"));
        corsConfiguration.applyPermitDefaultValues();

        http.headers().frameOptions().sameOrigin()
                .and()
            .cors()
            .configurationSource(request -> corsConfiguration)
                .and()
            .csrf().disable()
            .authorizeRequests()
            .antMatchers("/**")
                .permitAll();
    }


}