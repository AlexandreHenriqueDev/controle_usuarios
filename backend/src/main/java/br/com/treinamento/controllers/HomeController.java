package br.com.treinamento.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/")
public class HomeController {

    public ModelAndView home(Model model, HttpServletRequest request, HttpServletRequest response) {
        model.addAttribute("content", "../static/home.html");
        return new ModelAndView("master");
    }

}
