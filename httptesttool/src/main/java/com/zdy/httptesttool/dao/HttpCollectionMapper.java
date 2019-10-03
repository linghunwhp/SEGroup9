package com.zdy.httptesttool.dao;

import com.zdy.httptesttool.pojo.HttpCollection;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HttpCollectionMapper {
    int insert(HttpCollection record);

    int insertSelective(HttpCollection record);

    int deleteCollectionById(Integer id);

    List findAllCollection();
}