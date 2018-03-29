<div align="center">
	<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3115778045,1449462060&fm=27&gp=0.jpg" />
</div>
> 2017完成的事情:


    * ……规划图……
	* ZCIMaker
		* Plcm
			* 项目(project)
			* 需求(demand)
			* 评价(evaluate)
			* 计划(plan)
		* User
			* 超管人员管理
			* 项目集人员管理
			* 用户管理
		* Pipeline
			* 流水线管理
			* 自动化构建
		* Docker
			* 容器管理
			* 网络管理
			* 镜像管理
		* Locuat(规划)
			* 压测平台
		* MockApi(规划)
			* apiMock平台
		* See(规划)
			* 报表管理
			* 操作日志管理
	* 外部系统对接

		* Bugzilla 对接bug系统, 项目同步,需求同步, 提bug
		* Jenkins 对接ci系统, 触发自动执行job
		* Gerrit&&Gitlab 对接git系统, 平台管理钩子,管理自动化入口


> 现状


1. plcm中已经完成         
    * 项目管理  
    * 需求管理  
    * 评价  
    * 测试计划   
    * 测试用例   
    * 用户管理
    
2. jenkins中已经完成      
    * view/job展示  
    * job构建   
    * job详细报表

3. autotest中已经完成     
    * 测试结果展示   
    * 手动执行case/task

4. ci中已经完成
    * 流水线管理

5. docker中已经完成
    * container管理
    * 分配固定ip


> 2018要做的事情


	1. 用户权限和管理员权限 mysql拆出来存redis里, 刷新plcm页面再次请求用户权限和项目id集
	2. 用例系统拆分,匹配新的路由规则导航追加Testcase系统, task展示使用model形式  [*]
	3. 用例系统追加bugzilla提bug入口,提交中本地存储bug列表，不记录状态，只作为统计报表时展示，关键字段， projecid demandid bugid，报表内容 项目/需求/时间段
	4. 关联gitlab api 绑定plcm与gitlab中项目关系,获取gitlab项目信息 [**舍弃]
	5. 计划系统拆     [*]
	6. 流水线增加自动构建功能
	7. 流水线构建完成,给容器打包tag,tag展示功能在流水线处    [*]
	8. docker管理中,增加网络ip管理和镜像下载功能 [*]
	9. 提取公共配置,shell一键替换
	10. jenkins管理增加node节点管理,只是查看功能  [**舍弃]
	11. 增加locust压测功能, locust节点注册, 脚本上传&&分发执行
	12. 增加全局log机制, log展示功能      [*]


> build 


	1. push code to gerrit (Gerrit Review)
	2. synchronous to gitlab (Gitlab)
	3. hook (Gitlab to ZCIMarker)
	4. Build Pipeline with ZCI
		(Build Jenkins Pipeline)
		4.1  check code by gitlab
		4.2  evaluate code by sonnar
		4.3  unit testing 
		4.4  auto testing
		4.5  build to docker
		4.6  commit image by tar && notice ZCIMarker
	5. Check Result By Jenkins Item by ZCI


> Domain


	1. Docker && Consul && Swarm
	2. Vue.js && ivew && egg.js
	3. Flask && Sqlachemy
	4. Jenkins && Pipeline
	5. gitlab && gerrit
	6. nginx && mysql && redis && mongodb
	7. linux && git
	8. Autotest Farmework