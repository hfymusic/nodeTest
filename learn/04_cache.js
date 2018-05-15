/**
 * Created by huangfy on 2018/2/26.
 */

// node被加载的时候执行，加载后缓存
require('./02_cusmod'); // 第一次被加载，会执行
require('./02_cusmod'); // 第二次做缓存

// 这里只会输出一次 'this is a module'