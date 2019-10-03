package com.zdy.httptesttool.service;

import com.zdy.httptesttool.dao.HttpCollectionMapper;
import com.zdy.httptesttool.dao.HttpHistoryMapper;
import com.zdy.httptesttool.pojo.HttpCollection;
import com.zdy.httptesttool.pojo.HttpHistoryWithBLOBs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HttpServiceImpl implements HttpService {
    @Autowired
    HttpHistoryMapper httpHistoryMapper;

    @Autowired
    HttpCollectionMapper httpCollectionMapper;

    @Autowired
    HttpCollection httpCollection;

    @Autowired
    HttpHistoryWithBLOBs httpHistoryWithBLOBs;

    @Override
    public List findAllHistory() {
        return httpHistoryMapper.findAllHistory();
    }

    @Override
    public HttpHistoryWithBLOBs findHistoryById(Integer id) {
        return httpHistoryMapper.findHistoryById(id);
    }

    @Override
    public int insertHistory(HttpHistoryWithBLOBs record) {
        return httpHistoryMapper.insert(record);
    }

    @Override
    public int deleteHistoryById(Integer id) {
        return httpHistoryMapper.deleteHistoryById(id);
    }

    @Override
    public List getMethods() {
        return httpHistoryMapper.getMethods();
    }

    @Override
    public List findAllCollection() {
        return httpCollectionMapper.findAllCollection();
    }

    @Override
    public int insertCollectionById(Integer id) {
        HttpHistoryWithBLOBs httpHistoryWithBLOBs=new HttpHistoryWithBLOBs();
        httpHistoryWithBLOBs=findHistoryById(id);
        HttpCollection httpCollection=new HttpCollection();
        httpCollection.setId(httpHistoryWithBLOBs.getId());
        httpCollection.setMethod(httpHistoryWithBLOBs.getMethod());
        httpCollection.setRequest(httpHistoryWithBLOBs.getRequest());
        return httpCollectionMapper.insert(httpCollection);
    }

    @Override
    public int deleteCollectionById(Integer id) {
        return httpCollectionMapper.deleteCollectionById(id);
    }
}
