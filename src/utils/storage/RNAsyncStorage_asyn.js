storage.save({
  key: 'loginState', // 注意:请不要在key中使用_下划线符号!
  data: {
    from: 'some other site',
    userid: 'some userid',
    token: 'some token',
  },

  // 如果不指定过期时间，则会使用defaultExpires参数
  // 如果设为null，则永不过期
  expires: 1000 * 3600,
});

// 读取
storage
  .load({
    key: 'loginState',

    // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
    autoSync: true, // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。

    // syncInBackground(默认为true)意味着如果数据过期，
    // 在调用sync方法的同时先返回已经过期的数据。
    syncInBackground: true,
    // 你还可以给sync方法传递额外的参数
    syncParams: {
      extraFetchOptions: {
        // 各种参数
      },
      someFlag: true,
    },
  })
  .then(ret => {
    // 如果找到数据，则在then方法中返回
    // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
    // 你只能在then这个方法内继续处理ret数据
    // 而不能在then以外处理
    // 也没有办法“变成”同步返回
    // 你也可以使用“看似”同步的async/await语法

    console.log(ret.userid);
    this.setState({ user: ret });
  })
  .catch(err => {
    //如果没有找到数据且没有sync方法，
    //或者有其他异常，则在catch中返回
    console.warn(err.message);
    switch (err.name) {
      case 'NotFoundError':
        // TODO;
        break;
      case 'ExpiredError':
        // TODO
        break;
    }
  });
  // 使用key和id来保存数据，一般是保存同类别（key）的大量数据。
// 所有这些"key-id"数据共有一个保存上限（无论是否相同key）
// 即在初始化storage时传入的size参数。
// 在默认上限参数下，第1001个数据会覆盖第1个数据。
// 覆盖之后，再读取第1个数据，会返回catch或是相应的sync方法。
var userA = {
  name: 'A',
  age: 20,
  tags: ['geek', 'nerd', 'otaku'],
};

storage.save({
  key: 'user', // 注意:请不要在key中使用_下划线符号!
  id: '1001', // 注意:请不要在id中使用_下划线符号!
  data: userA,
  expires: 1000 * 60,
});

//load 读取
storage
  .load({
    key: 'user',
    id: '1001',
  })
  .then(ret => {
    // 如果找到数据，则在then方法中返回
    console.log(ret.userid);
  })
  .catch(err => {
    // 如果没有找到数据且没有sync方法，
    // 或者有其他异常，则在catch中返回
    console.warn(err.message);
    switch (err.name) {
      case 'NotFoundError':
        // TODO;
        break;
      case 'ExpiredError':
        // TODO
        break;
    }
  });

// --------------------------------------------------

// 获取某个key下的所有id(仅key-id数据)
storage.getIdsForKey('user').then(ids => {
  console.log(ids);
});

// 获取某个key下的所有数据(仅key-id数据)
storage.getAllDataForKey('user').then(users => {
  console.log(users);
});

// !! 清除某个key下的所有数据(仅key-id数据)
storage.clearMapForKey('user');

// --------------------------------------------------

// 删除单个数据
storage.remove({
  key: 'lastPage',
});
storage.remove({
  key: 'user',
  id: '1001',
});

// !! 清空map，移除所有"key-id"数据（但会保留只有key的数据）
storage.clearMap();
storage.sync = {
  // sync方法的名字必须和所存数据的key完全相同
  // 参数从params中解构取出
  // 最后返回所需数据或一个promise
  async user(params) {
    const {
      id,
      syncParams: { extraFetchOptions, someFlag }
    } = params;
    const response = await fetch('user/?id=' + id, {
      ...extraFetchOptions
    });
    const responseText = await response.text();
    console.log(`user${id} sync resp: `, responseText);
    const json = JSON.parse(responseText);
    if (json && json.user) {
      storage.save({
        key: 'user',
        id,
        data: json.user
      });
      if (someFlag) {
        // 根据一些自定义标志变量操作
      }
      // 返回所需数据
      return json.user;
    } else {
      // 出错时抛出异常
      throw new Error(`error syncing user${id}`));
    }
  }
};
storage.load({
  key: 'user',
  id: '1002'
}).then(...)
// 使用和load方法一样的参数读取批量数据，但是参数是以数组的方式提供。
// 会在需要时分别调用相应的sync方法，最后统一返回一个有序数组。
storage.getBatchData([
	{ key: 'loginState' },
	{ key: 'checkPoint', syncInBackground: false },
	{ key: 'balance' },
	{ key: 'user', id: '1009' }
])
.then(results => {
  results.forEach( result => {
    console.log(result);
  })
})

//根据key和一个id数组来读取批量数据
storage.getBatchDataWithIds({
  key: 'user',
  ids: ['1001', '1002', '1003']
})
.then( ... )