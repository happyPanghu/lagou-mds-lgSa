# lagou-mds-lgSa 


用于拉勾埋点日志上报

## Install

```a
npm install --save-dev lagou-mds-lgSa
```

## Usage


```js
import lgSa from 'lagou-mds-lgSa'
 
lgSa.track('1kpx', {
   address_id: '1kq1',
   content_id: '收到的简历',
   action: 'click'
});
```


## API


### .track(event, actions)

##### options.event

Type: `String`<br>

##### options.actions
params:

    主要参数：
    address_id: 日志id
    content_id: 内容
    其他参数 会合并到 click_props，如：
       position_id: this.props.curPosition.positionId,
       page_number: 1
       c_id_list: ids,
       from: locationOpts.get('tab') || 'rec',
       action: 'click'
            
Type: `Object`<br>

`本平台`埋点上传


### .twoPlatTrack(event, actions)

##### options.event

Type: `String`<br>

##### options.actions

Params: 同track actions
Type: `Object`<br>

`本平台`和`神策`两种方式同时上报


#History Record        

| 版本 | 日志 | 时间|
| ------ | ------ | ------ |
| v1.0.0 | 拉勾埋点日志第一版 | 2019-04-15 |
| v1.0.1 | 修改index.js暴露方式 | 2019-04-15 |