# 全栈项目开发流程

## 软件安装

- 下载安装 [Node.js](http://nodejs.cn/download/)
- 下载安装 [Yarn](https://www.yarnpkg.com/en/docs/install)
- 下载安装 [MongoDB](https://www.mongodb.com/download-center/community)
- 下载安装 [VS Code](https://code.visualstudio.com/Download)
- 下载安装 [Git](https://git-scm.com/downloads)


## 命令行工具安装和配置

> 打开VSCode - 终端(Ctrl+J) - 下拉菜单选择"Select Default Shell" - "Git bash"

### 全局安装nestjs和vuejs的命令行工具

```shell
yarn global add @nestjs/cli @vue/cli
```

## 创建项目

1. 新建项目所在文件夹, 如: `/c/projects/fullstack-test`

### 创建服务端项目

1. 命令行进入该项目的主目录, 如: `cd /c/projects/fullstack-test`
1. `nest new -p yarn server` # 创建服务端(使用yarn)
1. `cd server`
1. `yarn add nestjs-config dotenv @types/dotenv nestjs-typegoose @typegoose/typegoose mongoose @types/mongoose class-validator class-transformer @nestjs/swagger swagger-ui-express @nestjs/passport passport passport-local passport-jwt @types/passport @types/passport-local @types/passport-jwt nestjs-mongoose-crud bcryptjs` # 安装常用包
1. `nest g app admin` # 创建后台接口的服务端子应用
1. `nest g app web` # 创建前端接口的服务端子应用
1. `nest g lib db` # 创建公共的数据库模块
1. `mkdir libs/db/src/models` # 创建存放所有模型文件的文件夹
1. `touch libs/db/src/models/user.model.ts` # 创建用户模型文件
1. `nest g mo -p admin users` # 在 **admin** 子项目中创建 **users** 模块
1. `nest g co -p admin users` # 创建对应控制器
1. ...

### 创建管理后台前端项目

1. 命令行进入该项目的主目录, 如: `cd /c/projects/fullstack-test`
1. `vue create -d admin` # 创建后台管理界面的前端项目
1. `yarn add -D sass sass-loader`
1. `yarn add axios bootstrap lodash dayjs`
1. `vue add router`
1. `vue add vuex`
1. `vue add element-ui`
1. `touch .env .env.development`

### 创建WEB前端项目

1. 命令行进入该项目的主目录, 如: `cd /c/projects/fullstack-test`
1. `vue create -d web` # 创建后台管理界面的前端项目
1. `yarn add -D sass sass-loader`
1. `yarn add axios bootstrap lodash dayjs`
1. `vue add router`
1. `vue add vuex`
1. `touch .env .env.development`