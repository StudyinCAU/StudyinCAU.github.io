---
title: cpp算法题之奇特的迷宫
date: 2024-03-16 20:27:19
tags:
- BFS
categories:
- 算法
---

# 蓝桥算法题：奇特的迷宫

## 编号：1994

```c++
#include <iostream>
#include <queue>
#include <cstring>
using namespace std;

const int N = 10;
char g[2 * N][2 * N];
int d[2 * N][2 * N];
int dir[4][2] = {{2, 0}, {0, 2}, {0, -2}, {-2, 0}};

int main() {
    int n;
    //多组数据
    while (cin >> n) {
        if (n == 0) break;
        memset(g, '.', sizeof(g));
	//将地图存入二维数组
    for (int i = 1; i <= n; i++) {
        int l = n - i + 1;
        string str;
        cin >> str;
        for (int j = 0; j < i; j++) {
            g[i][l] = str[j];
            l += 2;
        }
    }
    //将地图存入二维数组
    for (int i = n + 1; i <= 2 * n - 1; i++) {
        int l = i - n + 1;
        int s = n - (i - n);
        string str;
        cin >> str;
        for (int j = 0; j < s; j++) {
            g[i][l] = str[j];
            l += 2;
        }
    }
    //将起点和终点下标计算出来
    int sx = 0, sy = 0, ex = 0, ey = 0;
    for (int i = 1; i <= 2 * n - 1; i++) {
        for (int j = 1; j <= 2 * n - 1; j++) {
            if (g[i][j] == 'S') {
                sx = i;
                sy = j;
            }
            if (g[i][j] == 'D') {
                ex = i;
                ey = j;
            }
        }
    }
    //优先队列 存放了x,y,d1   x,y是下标  d1是到达该点的步数
    priority_queue<pair<int, pair<int, int>>, vector<pair<int, pair<int, int>>>, greater<pair<int, pair<int, int>>> > pq;
    //初始化到达所有下标的距离为0x3f3f3f3f表示无穷大无法到达
    memset(d, 0x3f, sizeof(d));
    //到起点的距离为0  因为开始就在起点
    d[sx][sy] = 0;
    //设置为1，因为从起点可以往上下左右走1步
    g[sx][sy]='1';
    //将起点加入到 队列中
    pq.push(make_pair(0, make_pair(sx, sy)));
    //ans是记录到达终点的距离，初始无穷大，表示无法到达
    int ans = 0x3f3f3f3f;
```


```c++
    //BFS模板
    while (!pq.empty()) {
        auto cur = pq.top();
        pq.pop();
        int x = cur.second.first, y = cur.second.second, d1 = cur.first;
        //如果当前是终点，记录答案直接退出
        if (x == ex && y == ey) {
            ans = d1;
            break;
        }
        //当前下标可以往上下左右走step步
        int step = (int)(g[x][y] - '0');
        for (int i = 0; i < 4; i++) {
            //nx,ny表示新的下标
            int nx = x + dir[i][0] * step;
            int ny = y + dir[i][1] * step; 
            //判断非法和边界情况的下标，不对就不执行下面代码
            if (nx < 1 || ny < 1 || nx >= 2 * n || ny >= 2 * n || g[nx][ny] == '.') continue;
            //如果到（nx ny 的步数) 大于 (x,y步数+1) ，表示可以把nx,ny步数更新的更小，同时把nx,ny加入到队列中
            if (d[nx][ny] > d[x][y] + 1) {
                d[nx][ny] = d[x][y] + 1;
                pq.push(make_pair(d[nx][ny], make_pair(nx, ny)));
            }
        }
    }
    //ans是记录到达终点的距离，初始无穷大，表示无法到达 ，如果到最后还是无法到达，输出0
    if (ans == 0x3f3f3f3f) cout << 0 << endl;
    else cout << ans << endl;
}

return 0;
}
```
