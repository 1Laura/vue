let vm = Vue.createApp ({
	data () {
		return {}
	}
}).mount ('#app');

const data = {
	name:'Luis'
}
const observedData = new Proxy (data, {
	set (target, key, value) {
		document.querySelector ("#name").innerHTML = value
		target[key] = value
	}
})
observedData.name = "John"
console.log (observedData.name)

