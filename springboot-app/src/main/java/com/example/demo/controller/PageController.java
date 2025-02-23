package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("name", "Wassim");  // Passing data to the HTML page
        return "index";  // Name of the HTML file (without .html)
    }
}
