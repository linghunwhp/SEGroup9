package com.zdy.httptesttool.dao;

import com.zdy.httptesttool.pojo.HttpHistoryWithBLOBs;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HttpHistoryMapper {
    int insert(HttpHistoryWithBLOBs record);

    int insertSelective(HttpHistoryWithBLOBs record);

    List findAllHistory();

    HttpHistoryWithBLOBs findHistoryById(Integer id);

    int deleteHistoryById(Integer id);

    List getMethods();
}