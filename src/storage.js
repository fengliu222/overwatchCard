import AV from 'leancloud-storage'

const appId = 'cQNAzWsrw6Nd9pMSfPv58s2A-gzGzoHsz';
const appKey = 'D8lOXJ09eq4f1acBISXj1Bs2';

export let client = null

export function init() {
	client = AV.init({
		appId,
		appKey,
		// 启用美国节点
		region: 'cn',
	});
}