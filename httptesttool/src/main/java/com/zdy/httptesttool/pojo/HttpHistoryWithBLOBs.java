package com.zdy.httptesttool.pojo;

import org.springframework.stereotype.Component;

@Component
public class HttpHistoryWithBLOBs extends HttpHistory {
    private String body;

    private String cookie;

    private String header;

    public String getBody() {
        return this.body;
    }

    public void setBody(String body) {
        this.body = body == null ? null : body.trim();
    }

    public String getCookie() {
        return cookie;
    }

    public void setCookie(String cookie) {
        this.cookie = cookie == null ? null : cookie.trim();
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header == null ? null : header.trim();
    }
}