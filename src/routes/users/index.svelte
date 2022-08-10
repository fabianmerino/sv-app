<script lang="ts">
	import { users } from 'stores/users';
	const columns = [
		{
			name: 'name',
			label: 'Name',
			accessor: 'name'
		},
		{
			name: 'email',
			label: 'Email',
			accessor: 'email'
		},
		{
			name: 'actions',
			label: 'Actions',
			accessor: (row: any) => {
				return {
					edit: {
						label: 'Edit',
						href: `/users/${row.id}/edit`
					},
					delete: {
						label: 'Delete',
						href: `/users/${row.id}/delete`
					}
				};
			}
		}
	];
</script>

<div class="flex p-5 mx-auto">
	<div class="overflow-x-auto w-full">
		<table class="table w-full rounded-box table-auto">
			<!-- head -->
			<thead>
				<tr>
					<th class="w-min">
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>
					{#each columns as column (column.name)}
						<th> {column.label} </th>
					{/each}
				</tr>
			</thead>
			<tbody>
				<!-- users -->
				{#if $users.length > 0}
					{#each $users as user, index}
						<tr class="hover cursor-pointer">
							<td class="w-min">
								<label>
									<input type="checkbox" class="checkbox" />
								</label>
							</td>
							<td>
								<div class="flex items-center space-x-3">
									<div class="avatar">
										<div class="mask mask-squircle w-12 h-12">
											<img
												src="https://placeimg.com/80/80/people"
												alt="Avatar Tailwind CSS Component"
											/>
										</div>
									</div>
									<div>
										<div class="font-bold">Hart Hagerty</div>
										<div class="text-sm opacity-50">United States</div>
									</div>
								</div>
							</td>
							<td>
								Zemlak, Daniel and Leannon
								<br />
								<span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
							</td>
							<td>Purple</td>
							<th>
								<button class="btn btn-ghost btn-xs">details</button>
							</th>
						</tr>
					{/each}
				{:else}
					<tr>
						<td colspan={columns.length + 1} class="text-center">No users found</td>
					</tr>
				{/if}
			</tbody>
			<!-- foot -->
			<tfoot>
				<tr>
					<th class="w-min" />
					{#each columns as column (column.name)}
						<th> {column.label} </th>
					{/each}
				</tr>
			</tfoot>
		</table>
	</div>
</div>
