-- 宇宙表
create table if not exists Universe (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  role_a text not null,
  role_b text not null,
  question text not null,
  created_at timestamp default now()
);

-- 回忆表
create table if not exists Memory (
  id uuid default gen_random_uuid() primary key,
  date date not null,
  universe_id uuid references Universe(id),
  answer_a text,
  answer_b text,
  created_at timestamp default now()
);

-- 插入示例数据
insert into Universe (name, description, role_a, role_b, question) values
('银河铁道999', '今晚，让我们搭乘这列穿越星空的列车，去探索彼此内心最柔软的角落。', '列车长', '乘客', '你最想和我一起去哪个星球旅行？'),
('小王子的玫瑰园', '在这个小宇宙里，你是我唯一的玫瑰。', '小王子', '玫瑰', '今天你想对我的玫瑰说什么？'),
('星际咖啡馆', '在宇宙的尽头，有一家只为我们营业的咖啡馆。', '咖啡师', '常客', '如果我现在给你调一杯咖啡，你希望是什么味道？'),
('月亮邮局', '把思念写在信上，寄给月亮那头的你。', '邮递员', '收信人', '如果今晚能收到一封我的信，你最想看到什么内容？'),
('极光观测站', '让我们一起等待，那场只属于我们的极光。', '观测员', '同行者', '你心中最美的极光是什么颜色的？');
