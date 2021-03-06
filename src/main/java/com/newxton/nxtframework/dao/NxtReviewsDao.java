package com.newxton.nxtframework.dao;

import com.newxton.nxtframework.entity.NxtReviews;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (NxtReviews)表数据库访问层
 *
 * @author makejava
 * @since 2020-11-14 21:45:45
 */
public interface NxtReviewsDao {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    NxtReviews queryById(Long id);

    /**
     * 查询指定行数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<NxtReviews> queryAllByLimit(@Param("offset") int offset, @Param("limit") int limit);


    /**
     * 通过实体作为筛选条件查询
     *
     * @param nxtReviews 实例对象
     * @return 对象列表
     */
    List<NxtReviews> queryAll(NxtReviews nxtReviews);

    /**
     * 新增数据
     *
     * @param nxtReviews 实例对象
     * @return 影响行数
     */
    int insert(NxtReviews nxtReviews);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<NxtReviews> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<NxtReviews> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<NxtReviews> 实例对象列表
     * @return 影响行数
     */
    int insertOrUpdateBatch(@Param("entities") List<NxtReviews> entities);

    /**
     * 修改数据
     *
     * @param nxtReviews 实例对象
     * @return 影响行数
     */
    int update(NxtReviews nxtReviews);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 影响行数
     */
    int deleteById(Long id);

}