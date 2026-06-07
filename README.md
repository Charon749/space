# Tonight

一个面向异地情侣的 Web 应用。

## 技术栈

- Next.js 15
- TypeScript
- Tailwind CSS
- Supabase
- shadcn/ui

## 风格

- Apple Journal 风格
- 深色背景
- 星空氛围
- 极简设计
- 大量留白
- 高级感而非二次元

## 页面

### 首页
- 显示 "Tonight"
- 显示 Day X
- 显示今日宇宙名称
- 显示宇宙简介
- 进入宇宙按钮

### 今日宇宙页
- 显示宇宙名称
- 显示用户 A 身份
- 显示用户 B 身份
- 显示今日问题
- 回答输入框
- 提交按钮

### 回忆页
- 显示历史记录列表
- 显示日期
- 显示宇宙名称
- 显示双方回答

## 数据库设计

### Universe (宇宙表)
```sql
create table Universe (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  role_a text not null,
  role_b text not null,
  question text not null,
  created_at timestamp default now()
);
```

### Memory (回忆表)
```sql
create table Memory (
  id uuid default gen_random_uuid() primary key,
  date date not null,
  universe_id uuid references Universe(id),
  answer_a text,
  answer_b text,
  created_at timestamp default now()
);
```

## 开始使用

1. 复制 `.env.example` 为 `.env.local` 并填入 Supabase 配置
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
4. 访问 `http://localhost:3000`

## 部署

可以直接部署到 Vercel。
