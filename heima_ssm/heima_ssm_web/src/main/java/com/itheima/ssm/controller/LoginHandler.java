package com.itheima.ssm.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@Component("LoginHandler")
public class LoginHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse resp, Authentication authentication) throws IOException, ServletException {
        Map<String, Object> map = new HashMap<>();
        map.put("msg", "登录成功！");
        map.put("principal", authentication.getPrincipal());
        resp.setContentType("application/json:charset=utf-8");
        PrintWriter out = resp.getWriter();
        // 对象转json传输给前端
        out.write(new ObjectMapper().writeValueAsString(map));
        out.flush();
        out.close();
    }
}
