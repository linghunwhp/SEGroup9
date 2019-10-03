package com.zdy.httptesttool.service;

import com.zdy.httptesttool.pojo.HttpHistoryWithBLOBs;

import java.util.List;

public interface HttpService {
    List findAllHistory();

    HttpHistoryWithBLOBs findHistoryById(Integer id);

    int insertHistory(HttpHistoryWithBLOBs record);

    int deleteHistoryById(Integer id);

    List getMethods();

    List findAllCollection();

    int insertCollectionById(Integer id);

    int deleteCollectionById(Integer id);
}
