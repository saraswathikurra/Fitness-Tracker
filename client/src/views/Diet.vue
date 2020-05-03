<template>
	<section class="section">
		<div class="box">
			<div class="columns is-multiline">
				<div class="column is-8 is-half-tablet">
					<header class="title has-text-centered is-info">
						My Diet Logs
					</header>
					<div class="card">
						<table class="table table-bordered table-hover">
							<thead>
								<tr>
									<th> ID </th>
									<th> Food Item</th>
									<th> Quantity </th>
									<th> Calories </th>
									<th> Result </th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(diet, index) in diets"  v-bind:key="index" >
									<td>{{ index+1 }}</td>
									<td>{{ diet.name }}</td>
									<td>{{ diet.quantity }}</td>
									<td>{{ diet.calories }}</td>
									<td>{{ diet.result }} </td>
								</tr>										
							</tbody>
							<tfoot>
							</tfoot>						
						</table>
					</div>
				</div>
				<div class="column is-4 is-half-tablet">
					<header class="title has-text-centered is-info">
						Calories for food.
					</header>
					<div class="field">
						<select class="input" v-model="selectfood" required>
							<option disabled> Select Food Item</option>
							<option v-for="list in lists" :key="list.id">{{list.name}}</option>
						</select>
					</div>
					<form @submit.prevent="dietResult">
						<div class="field">
							<label class="label"> Quantity </label>
							<input type="number" class="input" v-model="quantity" placeholder="Enter Quantity" required>
						</div>
						<div class="field">
							<label class="label"> Calories </label>
							<input type="number" class="input" v-model="calories" placeholder="Enter Calories" required>
						</div>
						<div class="control">
							<button type="submit" class="button is-info"> Calculate </button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import axios from "axios";
export default {
    data() {
		return {
			diets: [],
			lists: [
				{
					id: 1,
					name: "Apples",
				},
				{
					id: 2,
					name: "Avocados",
				},
				{
					id: 3,
					name: "Bananas",
				},
				{
					id: 4,
					name: "Blueberries",
				},
				{
					id: 5,
					name: "Oranges",
				},
				{
					id: 6,
					name: "Strawberries",
				},
				{
					id: 7,
					name: "Eggs",
				},
				{
					id: 8,
					name: "Lean beef",
				},
				{
					id: 9,
					name: "hia seeds",
				},
				{
					id: 10,
					name: "Coconuts",
				}
			],
			quantity: "",
			calories: "",
			selectfood: "Select Food Item",
        };
	},
	created() {
		this.getalldiets();
	},

	methods: {
		getalldiets(){
			axios.get(`${this.url}diet/alldiet`)
			.then(res => {
				console.log(res.data);
				this.diets = res.data;
			})
		},
		dietResult(){
			const newdiet = {				
				name: this.selectfood,
				quantity: this.quantity,
				calories: this.calories,
				result: this.quantity * this.calories
			}
			axios.post(`${this.url}diet/postdiet` , 
			{
				newdiet: newdiet
			})
			.then(res => {
				this.diets = res.data;
				this.getalldiets();
				window.location.reload();
			})
		}
	},
	props: {
		url: {
			type: String,
			default: "http://localhost:3000/"
		}
	},
}
</script>
<style scoped>
	table{
		width: 100%;
		border: 1px solid #d9d9d9;
	}
	table th:not([align]) {
		text-align: center;
	}
	table td:not([align]), table th:not([align]) {
		text-align: center;
	}
	.control{
        text-align: right;
    }
</style>