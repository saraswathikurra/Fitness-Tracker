<template>
	<section class="section">
		<div class="box">
			<div class="columns is-multiline">
				<div class="column is-8 is-half-tablet">
					<header class="title has-text-centered is-info">
						My Exercise Logs
					</header>
					<div class="card">
						<table class="table table-bordered table-hover">
							<thead>
								<tr>
									<th> ID </th>
									<th> Type of Exercise </th>
									<th> Reps </th>
									<th> Calories </th>
									<th> Result </th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(exercise, index) in exercises"  v-bind:key="index" >
									<td>{{ index+1 }}</td>
									<td>{{ exercise.name }}</td>
									<td>{{ exercise.reps }}</td>
									<td>{{ exercise.calories }}</td>
									<td>{{ exercise.result }} </td>
								</tr>										
							</tbody>
						</table>
					</div>
				</div>
				<div class="column is-4 is-half-tablet">
					<header class="title has-text-centered is-info">
						Calories for exercise.
					</header>
					<div class="field">
						<select class="input" v-model="selectExercise" required>
							<option disabled> Choose an exercise </option>
							<option v-for="type in names" :key="type.id">
								{{type.name}}
							</option>
						</select>
					</div>
					
					<form @submit.prevent="exerciseResult">
						<div class="field">
							<label class="label"> Reps </label>
							<input type="number" class="input" v-model="reps" placeholder="Enter Reps" required/>
						</div>
						<div class="field">
							<label class="label"> Calories </label>
							<input type="number" class="input" v-model="calories" placeholder="Enter Calories" required/>
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
				exercises: [],
				names: [
					{
						id: 1,
						name: "Aerobic",
					},
					{
						id: 2,
						name: "Anaerobic",
					},
					{
						id: 3,
						name: "Circuit",
					},
					{
						id: 4,
						name: "Compound",
					},
					{
						id: 5,
						name: "Cool-Down",
					},
					{
						id: 6,
						name: "Cross-Training",
					},
					{
						id: 7,
						name: "Functional Moves",
					},
					{
						id: 8,
						name: "Heart Rate Zones",
					},
				],
				selectExercise: "Choose an exercise",
				reps: "",
				calories: "",
			};
		 },

		created() {
			this.getallexercises();
		},

		methods: {
			getallexercises(){
				axios.get(`${this.url}exercise/allexercise`)
				
				.then(res => {
					console.log(res.data);
					this.exercises = res.data;
				})
			},

			exerciseResult(){
				const newexercise = {
					name: this.selectExercise,
					reps: this.reps,
					calories: this.calories,
					result: this.reps*this.calories
				}
				axios.post(`${this.url}exercise/postexercise` , 
				{
					newexercise: newexercise
				})
				.then(res => {
					this.exercises = res.data;
					this.getallexercises();
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