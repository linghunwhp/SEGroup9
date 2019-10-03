package com.zdy.httptesttool.controller;

import com.alibaba.fastjson.JSONObject;
import com.zdy.httptesttool.pojo.HttpHistoryWithBLOBs;
import com.zdy.httptesttool.service.HttpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Date;
import java.util.List;

@RestController
public class HttpController {
    @Autowired
    HttpService httpService;

    @GetMapping("/GetHistory")
    public List getHistory(){
        return httpService.findAllHistory();
    }

    @GetMapping("/GetHistoryById/{id}")
    public HttpHistoryWithBLOBs getHistoryById(@PathVariable("id") Integer id){
        return httpService.findHistoryById(id);
    }

    @PostMapping("/InsertHistory/{request}/{method}/{body}/{cookie}/{header}/{time}")
    public int insertHistory(@PathVariable("request") String request,@PathVariable("method") String method,@PathVariable("cookie") String cookie,@PathVariable("body") String body,@PathVariable("header") String header,@PathVariable("time") Integer time){
        Date date=new Date();
        HttpHistoryWithBLOBs httpHistoryWithBLOBs=new HttpHistoryWithBLOBs();
        httpHistoryWithBLOBs.setRequest(request);
        httpHistoryWithBLOBs.setMethod(method);
        httpHistoryWithBLOBs.setCookie(cookie);
        httpHistoryWithBLOBs.setBody(body);
        httpHistoryWithBLOBs.setHeader(header);
        httpHistoryWithBLOBs.setTime(time);
        httpHistoryWithBLOBs.setDate(date);
        return httpService.insertHistory(httpHistoryWithBLOBs);
    }

    @PostMapping(value = "/InsertHistoryByJSON",produces = "application/json;charset=UTF-8")
    public int insertHistoryByJSON(@RequestBody JSONObject jsonParam)
    {
        Date date=new Date();
        HttpHistoryWithBLOBs httpHistoryWithBLOBs=new HttpHistoryWithBLOBs();
        httpHistoryWithBLOBs.setRequest(jsonParam.getString("request"));
        httpHistoryWithBLOBs.setMethod(jsonParam.getString("method"));
        httpHistoryWithBLOBs.setCookie(jsonParam.getJSONObject("cookie").toString());
        httpHistoryWithBLOBs.setBody(jsonParam.getJSONObject("body").toString());
        httpHistoryWithBLOBs.setHeader(jsonParam.getJSONObject("header").toString());
        httpHistoryWithBLOBs.setTime(jsonParam.getInteger("time"));
        httpHistoryWithBLOBs.setDate(date);
        return httpService.insertHistory(httpHistoryWithBLOBs);
    }

    @DeleteMapping("/DeleteHistoryById/{id}")
    public int deleteHistoryById(@PathVariable("id") Integer id){
        return httpService.deleteHistoryById(id);
    }

    @GetMapping("/GetMethods")
    public List getMethods(){
        return httpService.getMethods();
    }

    @GetMapping("/GetCollections")
    public List getCollections(){
        return httpService.findAllCollection();
    }

    @PostMapping("/AddToCollection/{id}")
    public int insertCollectionById(@PathVariable("id") Integer id){
        return httpService.insertCollectionById(id);
    }

    @DeleteMapping("DeleteCollectionById/{id}")
    public int deleteCollectionById(@PathVariable("id") Integer id){
        return httpService.deleteCollectionById(id);
    }

}
