const log = `
   --> GET /clusters/default/base-info 200 112ms 17.8kb 2022/10/18T22:41:59.997

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/default 2022/10/18T22:42:00.543

   <-- GET /kapis/clusters/default/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/18T22:42:00.546

   <-- GET /clusters/default/base-info 2022/10/18T22:42:34.885

   --> GET /clusters/default/base-info 200 56ms 17.8kb 2022/10/18T22:42:34.941

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/default 2022/10/18T22:42:35.327

   <-- GET /kapis/clusters/default/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/18T22:42:35.330

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/default 2022/10/18T22:42:41.522

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/default 2022/10/18T22:42:44.594

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/default 2022/10/18T22:42:47.683

   <-- GET /clusters/default/overview 2022/10/18T22:42:49.549

   --> GET /clusters/default/overview 200 51ms 17.8kb 2022/10/18T22:42:49.599

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/default 2022/10/18T22:42:49.899

   <-- GET /kapis/clusters/default/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/18T22:42:49.903

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/18T22:42:53.884

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/18T22:42:53.886

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/default 2022/10/18T22:42:55.628

   <-- GET /apis/cluster.kubesphere.io/v1alpha1/clusters/mem 2022/10/18T22:43:27.530

   --> GET /apis/cluster.kubesphere.io/v1alpha1/clusters/mem 200 18ms 15b 2022/10/18T22:43:27.548

   <-- GET /apis/cluster.kubesphere.io/v1alpha1/clusters/member 2022/10/18T22:43:28.227

   --> GET /apis/cluster.kubesphere.io/v1alpha1/clusters/member 200 19ms 15b 2022/10/18T22:43:28.246

   <-- GET /apis/cluster.kubesphere.io/v1alpha1/clusters/member1 2022/10/18T22:43:28.447

   --> GET /apis/cluster.kubesphere.io/v1alpha1/clusters/member1 200 17ms 15b 2022/10/18T22:43:28.463

   <-- GET /apis/cluster.kubesphere.io/v1alpha1/clusters/member1 2022/10/18T22:43:30.912

   --> GET /apis/cluster.kubesphere.io/v1alpha1/clusters/member1 200 18ms 15b 2022/10/18T22:43:30.930

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666092240&end=1666104240&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/18T22:44:00.373

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/18T22:44:04.470

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/18T22:44:04.475

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/18T22:44:06.316

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/18T22:44:06.318

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/18T22:44:06.436

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/18T22:44:06.572

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/18T22:44:06.574

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/18T22:44:06.576

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/18T22:44:06.577

   <-- GET /kapis/clusters/host/version 2022/10/18T22:44:06.579

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/18T22:44:06.650

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/10/18T22:44:10.434

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/10/18T22:44:10.438

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/10/18T22:44:10.536

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/18T22:44:12.619

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/18T22:44:14.195

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/18T22:44:14.197

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/18T22:44:14.198

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/18T22:44:14.200

   <-- GET /kapis/clusters/host/version 2022/10/18T22:44:14.201

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/18T22:44:14.266

   <-- GET /kapis/clusters/host/version 2022/10/18T22:44:24.488

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/18T22:44:24.489

   <-- GET /clusters/host/base-info 2022/10/18T22:44:36.191

   --> GET /clusters/host/base-info 200 79ms 17.8kb 2022/10/18T22:44:36.271

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/18T22:44:36.723

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/18T22:44:36.725

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/18T22:44:36.846

   <-- GET /kapis/clusters/host/version 2022/10/18T22:44:36.948

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/18T22:44:36.950

   <-- GET /clusters/default/base-info 2022/10/18T22:44:46.522

   --> GET /clusters/default/base-info 200 56ms 17.8kb 2022/10/18T22:44:46.578

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/default 2022/10/18T22:44:46.954

   <-- GET /kapis/clusters/default/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/18T22:44:46.957

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666092300&end=1666104300&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/18T22:45:00.537

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/default 2022/10/18T22:45:01.302

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/18T22:45:03.605

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/18T22:45:03.607

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/18T22:45:03.725

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/18T22:45:03.865

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/18T22:45:03.867

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/18T22:45:03.868

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/18T22:45:03.873

   <-- GET /kapis/clusters/host/version 2022/10/18T22:45:03.874

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/18T22:45:03.960

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/10/18T22:45:19.813

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/18T22:45:24.372

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/18T22:45:24.374

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/18T22:45:24.378

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/18T22:45:24.379

   <-- GET /kapis/clusters/host/version 2022/10/18T22:45:24.380

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/18T22:45:24.452

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666093859&end=1666105859&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/18T23:10:59.388

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/18T23:11:02.486

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/18T23:11:02.487

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/18T23:11:13.134

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/18T23:11:13.136

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/18T23:11:13.246

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/18T23:11:13.354

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/18T23:11:13.357

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/18T23:11:13.358

   <-- GET /kapis/clusters/host/version 2022/10/18T23:11:13.361

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/18T23:11:13.407

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/18T23:11:13.432

   <-- GET /kapis/clusters/host/version 2022/10/18T23:11:19.086

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/18T23:11:19.090

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/10/18T23:11:57.662

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/18T23:12:01.581

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?limit=-1&sortBy=createTime&page=1&annotation=kubesphere.io%2Fcreator 2022/10/18T23:12:01.583

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/10/18T23:12:02.469

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/18T23:12:02.667

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&sortBy=createTime&page=1 2022/10/18T23:12:06.829

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?limit=-1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&page=1 2022/10/18T23:12:06.831

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/18T23:12:14.459

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?limit=-1&sortBy=createTime&page=1&annotation=kubesphere.io%2Fcreator 2022/10/18T23:12:14.461

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/18T23:12:15.540

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/18T23:12:22.934

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/10/18T23:12:22.936

   <-- GET /kapis/clusters/host/gateway.kubesphere.io/v1alpha1/namespaces/kubesphere-system/gateways 2022/10/18T23:12:25.296

   <-- GET /kapis/clusters/host/version 2022/10/18T23:12:28.242

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/18T23:12:28.245

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/10/18T23:13:50.825

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=-1&sortBy=createTime&page=1 2022/10/18T23:13:50.833

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/10/18T23:13:51.921

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/globalroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/10/18T23:13:53.093

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/globalroles?label=iam.kubesphere.io/role-template=true 2022/10/18T23:13:53.095

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/18T23:14:07.672

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/18T23:14:08.752

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/10/18T23:14:10.349

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=-1&sortBy=createTime&page=1 2022/10/18T23:14:10.352

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/10/18T23:14:11.428

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/18T23:14:13.514

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/wo 2022/10/18T23:14:26.273

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/wo 200 14ms 15b 2022/10/18T23:14:26.287

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/work 2022/10/18T23:14:27.061

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/work 200 13ms 15b 2022/10/18T23:14:27.074

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/works 2022/10/18T23:14:27.746

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/works 200 12ms 15b 2022/10/18T23:14:27.758

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/workspa 2022/10/18T23:14:28.210

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/workspa 200 12ms 15b 2022/10/18T23:14:28.222

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/workspace 2022/10/18T23:14:28.569

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/workspace 200 22ms 15b 2022/10/18T23:14:28.591

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/workspace-test 2022/10/18T23:14:29.582

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/workspace-test 200 14ms 15b 2022/10/18T23:14:29.596

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/workspace-test 2022/10/18T23:14:35.768

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/workspace-test 200 15ms 15b 2022/10/18T23:14:35.782

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=-1&sortBy=createTime&page=1 2022/10/18T23:14:35.810

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666094099&end=1666106099&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/18T23:14:59.511

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/18T23:15:03.612

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/18T23:15:03.615

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666094105&end=1666106105&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/18T23:15:05.724

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users/admin 2022/10/18T23:15:08.181

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666094712&end=1666106712&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/18T23:25:13.091

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T00:19:19.798

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T00:19:19.802

   --> GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 302 7ms 101b 2022/10/19T00:19:19.805

   --> GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 302 4ms 101b 2022/10/19T00:19:19.806

   <-- GET /clusters 2022/10/19T00:19:19.834

   --> GET /clusters 200 64ms 17.8kb 2022/10/19T00:19:19.898

   <-- GET /clusters 2022/10/19T00:19:19.924

   --> GET /clusters 200 48ms 17.8kb 2022/10/19T00:19:19.973

   <-- GET /clusters 2022/10/19T00:19:19.992

   <-- GET /clusters 2022/10/19T00:19:20.013

   --> GET /clusters 200 131ms 17.8kb 2022/10/19T00:19:20.144

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T00:19:20.591

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T00:19:20.593

   <-- GET /apis/cluster.kubesphere.io/v1alpha1/clusters/mem 2022/10/19T00:19:26.921

   --> GET /apis/cluster.kubesphere.io/v1alpha1/clusters/mem 200 16ms 15b 2022/10/19T00:19:26.937

   <-- GET /apis/cluster.kubesphere.io/v1alpha1/clusters/member1 2022/10/19T00:19:27.649

   --> GET /apis/cluster.kubesphere.io/v1alpha1/clusters/member1 200 14ms 15b 2022/10/19T00:19:27.663

   <-- GET /apis/cluster.kubesphere.io/v1alpha1/clusters/member1 2022/10/19T00:19:40.479

   --> GET /apis/cluster.kubesphere.io/v1alpha1/clusters/member1 200 14ms 15b 2022/10/19T00:19:40.493

   <-- POST /kapis/cluster.kubesphere.io/v1alpha1/clusters/validation 2022/10/19T00:23:03.634

   <-- POST /kapis/cluster.kubesphere.io/v1alpha1/clusters/validation 2022/10/19T00:23:42.070

   <-- POST /apis/cluster.kubesphere.io/v1alpha1/clusters 2022/10/19T00:23:42.195

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/member1 2022/10/19T00:23:42.316

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T00:23:42.326

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/member1 2022/10/19T00:23:45.429

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T00:23:45.532

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/components 2022/10/19T00:23:45.534

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/19T00:23:45.538

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/19T00:23:45.540

   <-- GET /kapis/clusters/member1/version 2022/10/19T00:23:45.542

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/19T00:23:45.632

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/member1 2022/10/19T00:23:48.551

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/10/19T00:23:50.041

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/10/19T00:23:50.042

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/nodes?cluster=member1&resources_filter=i-8ma332dk%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/10/19T00:23:50.163

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/nodes/i-8ma332dk 2022/10/19T00:23:52.463

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/nodes?start=1666106632&end=1666110232&step=180s&times=20&resources_filter=i-8ma332dk%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/10/19T00:23:52.581

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666098235&end=1666110235&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/19T00:23:55.631

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T00:23:58.961

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T00:23:58.963

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/member1 2022/10/19T00:24:03.745

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T00:24:03.747

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/19T00:24:03.867

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/components 2022/10/19T00:24:03.987

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T00:24:03.988

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/19T00:24:03.989

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/19T00:24:03.994

   <-- GET /kapis/clusters/member1/version 2022/10/19T00:24:03.996

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/19T00:24:04.097

   <-- GET /kapis/clusters/member1/version 2022/10/19T00:24:10.827

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/cluster?cluster=member1&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/19T00:24:10.829

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T00:24:22.612

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T00:24:22.619

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/19T00:24:23.893

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T00:24:23.896

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/19T00:24:24.011

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/19T00:24:24.119

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T00:24:24.121

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/19T00:24:24.122

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/19T00:24:24.127

   <-- GET /kapis/clusters/host/version 2022/10/19T00:24:24.129

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/19T00:24:24.307

   <-- GET /kapis/clusters/host/version 2022/10/19T00:24:27.536

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/19T00:24:27.540

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T00:24:35.643

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T00:24:35.645

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/member1 2022/10/19T00:24:38.221

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T00:24:38.223

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/19T00:24:38.346

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/components 2022/10/19T00:24:38.457

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T00:24:38.458

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/19T00:24:38.460

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/19T00:24:38.465

   <-- GET /kapis/clusters/member1/version 2022/10/19T00:24:38.465

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/19T00:24:38.580

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T00:24:39.236

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T00:24:39.238

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/19T00:24:47.995

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T00:24:47.997

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/19T00:24:48.110

   <-- GET /kapis/clusters/host/version 2022/10/19T00:24:48.208

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/19T00:24:48.210

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/10/19T00:24:56.654

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/19T00:24:57.452

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?limit=-1&sortBy=createTime&page=1&annotation=kubesphere.io%2Fcreator 2022/10/19T00:24:57.455

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/19T00:24:58.539

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?limit=-1&sortBy=createTime&page=1 2022/10/19T00:24:59.774

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/19T00:24:59.776

   <-- GET /kapis/clusters/host/version 2022/10/19T00:25:07.596

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/19T00:25:07.598

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/10/19T00:26:06.048

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/10/19T00:26:06.118

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/10/19T00:26:07.148

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/10/19T00:26:07.213

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/19T00:26:07.851

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/10/19T00:26:13.569

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=-1&sortBy=createTime&page=1 2022/10/19T00:26:13.603

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/10/19T00:26:14.675

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/globalroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/10/19T00:26:14.911

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/globalroles?label=iam.kubesphere.io/role-template=true 2022/10/19T00:26:14.912

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666098376&end=1666110376&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/19T00:26:16.397

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users/admin 2022/10/19T00:26:27.965

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T00:26:31.199

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T00:26:31.201

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/member1 2022/10/19T00:26:40.040

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T00:26:40.046

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/19T00:26:40.193

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T00:26:40.308

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/components 2022/10/19T00:26:40.310

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/19T00:26:40.311

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/19T00:26:40.317

   <-- GET /kapis/clusters/member1/version 2022/10/19T00:26:40.320

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/19T00:26:40.424

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/19T00:26:51.431

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/19T00:26:52.689

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/deployments?page=2&sortBy=updateTime&limit=10 2022/10/19T00:26:55.219

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/deployments?page=1&sortBy=updateTime&limit=10 2022/10/19T00:26:57.668

   <-- GET /apis/clusters/member1/apps/v1/namespaces/kubesphere-system/deployments/ks-console 2022/10/19T00:27:03.465

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/persistentvolumeclaims?sortBy=createTime&limit=10 2022/10/19T00:27:24.693

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/persistentvolumeclaims?sortBy=createTime&limit=10 2022/10/19T00:27:25.814

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=%21kubesphere.io%2Fkubefed-host-namespace%2C%21kubesphere.io%2Fdevopsproject 2022/10/19T00:27:27.831

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/10/19T00:27:27.833

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/storageclasses?sortBy=createTime&limit=10 2022/10/19T00:27:59.668

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/volumesnapshots?sortBy=createTime&limit=10 2022/10/19T00:28:00.767

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/storageclasses?sortBy=createTime&limit=10 2022/10/19T00:28:00.821

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/volumesnapshotclasses?sortBy=createTime&limit=10 2022/10/19T00:28:01.619

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/volumesnapshotclasses?sortBy=createTime&limit=10 2022/10/19T00:28:03.332

   <-- GET /apis/clusters/member1/monitoring.coreos.com/v1/namespaces/kubesphere-monitoring-system/servicemonitors/etcd 2022/10/19T00:28:05.498

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/componenthealth 2022/10/19T00:28:05.500

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/cluster?start=1666080485&end=1666110485&step=300s&times=100&metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_cpu_utilisation%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_memory_utilisation%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_disk_size_utilisation%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T00:28:05.503

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/apiserver?start=1666080485&end=1666110485&step=300s&times=100&metrics_filter=apiserver_request_latencies%7Capiserver_request_by_verb_latencies%7Capiserver_request_rate%24 2022/10/19T00:28:05.507

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/scheduler?start=1666080485&end=1666110485&step=300s&times=100&metrics_filter=scheduler_schedule_attempts%7Cscheduler_schedule_attempt_rate%24 2022/10/19T00:28:05.593

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/componenthealth 2022/10/19T00:28:07.493

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/componenthealth 2022/10/19T00:28:09.607

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/componenthealth 2022/10/19T00:28:11.689

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/componenthealth 2022/10/19T00:28:13.775

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/clusterdashboards?sortBy=createTime&limit=10 2022/10/19T00:28:15.213

   <-- GET /kapis/clusters/member1/version 2022/10/19T00:28:18.044

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/cluster?cluster=member1&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/19T00:28:18.046

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/10/19T00:28:36.586

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/19T00:28:36.589

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clusterroles/cluster-viewer 2022/10/19T00:28:54.538

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/19T00:28:54.541

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clustermembers?clusterrole=cluster-viewer&sortBy=createTime&limit=10 2022/10/19T00:28:57.762

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/19T00:29:20.451

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/10/19T00:29:20.452

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clusterroles/cluster-admin 2022/10/19T00:29:21.922

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/19T00:29:21.925

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clustermembers?clusterrole=cluster-admin&sortBy=createTime&limit=10 2022/10/19T00:29:24.097

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/10/19T00:29:29.803

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/19T00:29:29.806

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/10/19T00:29:39.912

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&sortBy=createTime&page=1 2022/10/19T00:29:50.302

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/workspaces?limit=-1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&page=1 2022/10/19T00:29:50.304

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/10/19T00:30:13.576

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=-1&sortBy=createTime&page=1 2022/10/19T00:30:13.578

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/10/19T00:30:14.681

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/19T00:30:15.084

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/19T00:30:16.160

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/globalroles?limit=-1&sortBy=createTime&page=1&annotation=kubesphere.io%2Fcreator 2022/10/19T00:30:16.878

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users/wayne 2022/10/19T00:30:19.683

   --> GET /kapis/iam.kubesphere.io/v1alpha2/users/wayne 200 14ms 15b 2022/10/19T00:30:19.696

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?email=wayne%40yunify.com 2022/10/19T00:30:23.452

   --> GET /kapis/iam.kubesphere.io/v1alpha2/users?email=wayne%40yunify.com 200 12ms 15b 2022/10/19T00:30:23.464

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users/wayne 2022/10/19T00:30:43.420

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?email=wayne%40yunify.com 2022/10/19T00:30:43.423

   --> GET /kapis/iam.kubesphere.io/v1alpha2/users/wayne 200 14ms 15b 2022/10/19T00:30:43.434

   --> GET /kapis/iam.kubesphere.io/v1alpha2/users?email=wayne%40yunify.com 200 13ms 15b 2022/10/19T00:30:43.436

   <-- POST /kapis/iam.kubesphere.io/v1alpha2/users 2022/10/19T00:30:43.463

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/19T00:30:43.543

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/19T00:30:44.541

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users/wayne 2022/10/19T00:30:52.189

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users/wayne/loginrecords?limit=10 2022/10/19T00:30:52.274

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/19T00:31:00.295

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/19T00:31:01.383

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users/wayne 2022/10/19T00:31:02.182

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users/wayne/loginrecords?limit=10 2022/10/19T00:31:02.266

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/19T00:31:05.712

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/10/19T00:31:06.797

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T00:31:08.412

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T00:31:08.414

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/member1 2022/10/19T00:31:10.230

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T00:31:10.235

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/19T00:31:10.365

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/components 2022/10/19T00:31:10.500

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T00:31:10.503

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/19T00:31:10.504

   <-- GET /kapis/clusters/member1/version 2022/10/19T00:31:10.509

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/19T00:31:10.510

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/19T00:31:10.620

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/10/19T00:31:12.825

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&sortBy=createTime&page=1 2022/10/19T00:31:14.740

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/workspaces?limit=-1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&page=1 2022/10/19T00:31:14.744

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666098685&end=1666110685&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/19T00:31:25.434

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/19T00:31:26.743

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T00:31:26.745

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/19T00:31:26.869

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T00:31:26.987

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/19T00:31:26.988

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/19T00:31:26.990

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/19T00:31:26.991

   <-- GET /kapis/clusters/host/version 2022/10/19T00:31:26.993

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/19T00:31:27.152

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/10/19T00:31:29.194

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&sortBy=createTime&page=1 2022/10/19T00:31:31.122

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?limit=-1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&page=1 2022/10/19T00:31:31.126

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/10/19T00:31:40.023

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/10/19T00:31:40.026

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/10/19T00:31:40.127

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/10/19T00:31:42.581

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1666107102&end=1666110702&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/10/19T00:31:42.688

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/10/19T00:31:55.853

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1666108915&end=1666110715&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-rglpp%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%7Cnotification-manager-deployment-78664576cb-qkhz2%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:31:56.025

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1666092722&end=1666110722&step=300s&times=60&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_load1%7Cnode_load5%7Cnode_load15%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_disk_inode_utilisation%7Cnode_device_size_utilisation%7Cnode_disk_inode_usage%7Cnode_disk_inode_total%7Cnode_disk_read_iops%7Cnode_disk_write_iops%7Cnode_disk_read_throughput%7Cnode_disk_write_throughput%7Cnode_net_bytes_transmitted%7Cnode_net_bytes_received%24 2022/10/19T00:32:02.709

   <-- GET /api/clusters/host/v1/events?fieldSelector=involvedObject.name%3Di-n0vhwq18%2CinvolvedObject.kind%3DNode 2022/10/19T00:32:08.372

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/10/19T00:32:28.794

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/10/19T00:32:28.796

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/10/19T00:32:28.888

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666098749&end=1666110749&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/19T00:32:30.082

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666098788&end=1666110788&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/19T00:33:08.945

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T00:33:11.333

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T00:33:11.335

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/member1 2022/10/19T00:33:17.221

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T00:33:17.223

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/19T00:33:17.357

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/components 2022/10/19T00:33:17.483

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T00:33:17.485

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/19T00:33:17.489

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/19T00:33:17.491

   <-- GET /kapis/clusters/member1/version 2022/10/19T00:33:17.492

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/19T00:33:17.598

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/10/19T00:33:21.697

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/10/19T00:33:22.866

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/services?page=2&sortBy=createTime&limit=10 2022/10/19T00:33:24.361

   <-- GET /api/clusters/member1/v1/namespaces/kubesphere-system 2022/10/19T00:33:27.579

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/10/19T00:33:27.581

   <-- GET /api/clusters/member1/v1/namespaces/kubesphere-system/services/ks-apiserver 2022/10/19T00:33:27.680

   <-- GET /api/clusters/member1/v1/namespaces/kubesphere-system/endpoints/ks-apiserver 2022/10/19T00:33:27.684

   <-- GET /apis/clusters/member1/monitoring.coreos.com/v1/namespaces/kubesphere-system/servicemonitors?labelSelector=app%3Dks-apiserver%2Capp.kubernetes.io%2Fmanaged-by%3DHelm%2Ctier%3Dbackend%2Cversion%3Dv3.1.0 2022/10/19T00:33:27.799

   <-- GET /apis/clusters/member1/apps/v1/namespaces/kubesphere-system/deployments?labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend 2022/10/19T00:33:27.801

   <-- GET /apis/clusters/member1/apps/v1/namespaces/kubesphere-system/statefulsets?labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend 2022/10/19T00:33:27.802

   <-- GET /apis/clusters/member1/apps/v1/namespaces/kubesphere-system/daemonsets?labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend 2022/10/19T00:33:27.803

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/19T00:33:27.804

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=member1&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666109007&end=1666110807&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-526k8%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:33:27.912

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/19T00:33:29.800

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=member1&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666109009&end=1666110809&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-526k8%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:33:29.877

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=member1&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-526k8%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:33:32.799

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=member1&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-526k8%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:33:37.810

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=member1&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-526k8%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:33:42.803

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=member1&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-526k8%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:33:47.805

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/10/19T00:33:50.647

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/10/19T00:33:51.846

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T00:33:57.473

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T00:33:57.475

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/19T00:33:59.226

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T00:33:59.227

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/19T00:33:59.340

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/19T00:33:59.451

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T00:33:59.453

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/19T00:33:59.454

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/19T00:33:59.456

   <-- GET /kapis/clusters/host/version 2022/10/19T00:33:59.460

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/19T00:33:59.580

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/ingresses?sortBy=createTime&limit=10 2022/10/19T00:34:21.731

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=%21kubesphere.io%2Fkubefed-host-namespace%2C%21kubesphere.io%2Fdevopsproject 2022/10/19T00:34:23.787

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/10/19T00:34:23.791

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/10/19T00:34:31.713

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/10/19T00:34:31.794

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/10/19T00:34:32.803

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/10/19T00:34:32.869

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%3Dsystem-workspace 2022/10/19T00:34:34.476

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kube-federation-system%7Ckubesphere-monitoring-federated%7Ckubesphere-controls-system%7Ckubesphere-system%7Ckubesphere-monitoring-system%7Cdefault%7Ckube-system%7Ckube-public%7Ckube-node-lease%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/10/19T00:34:34.572

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/10/19T00:34:40.373

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/10/19T00:34:40.448

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/10/19T00:35:05.962

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/19T00:35:10.131

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/19T00:35:11.382

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system 2022/10/19T00:35:49.399

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/10/19T00:35:49.400

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/deployments/ks-apiserver 2022/10/19T00:35:49.465

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/19T00:35:49.562

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-apiserver 2022/10/19T00:35:49.563

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-apiserver 200 14ms 15b 2022/10/19T00:35:49.577

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666109149&end=1666110949&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:35:49.612

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/19T00:35:51.561

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666109151&end=1666110951&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:35:51.632

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:35:54.567

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:35:59.572

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/19T00:36:00.131

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/19T00:36:01.359

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/10/19T00:36:02.213

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/10/19T00:36:03.342

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=name&ascending=true&limit=10 2022/10/19T00:36:07.946

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system 2022/10/19T00:36:09.788

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/10/19T00:36:09.789

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/services/ks-apiserver 2022/10/19T00:36:09.855

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/endpoints/ks-apiserver 2022/10/19T00:36:09.858

   <-- GET /apis/clusters/host/monitoring.coreos.com/v1/namespaces/kubesphere-system/servicemonitors?labelSelector=app%3Dks-apiserver%2Capp.kubernetes.io%2Fmanaged-by%3DHelm%2Ctier%3Dbackend%2Cversion%3Dv3.1.0 2022/10/19T00:36:09.944

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/deployments?labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend 2022/10/19T00:36:09.946

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/statefulsets?labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend 2022/10/19T00:36:09.952

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/daemonsets?labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend 2022/10/19T00:36:09.953

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/19T00:36:09.954

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666109169&end=1666110969&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:10.063

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/19T00:36:11.951

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666109171&end=1666110971&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:12.032

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:14.941

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:19.942

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/services/ks-apiserver 2022/10/19T00:36:23.492

   <-- PUT /api/clusters/host/v1/namespaces/kubesphere-system/services/ks-apiserver 2022/10/19T00:36:23.571

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/services/ks-apiserver 2022/10/19T00:36:23.656

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/endpoints/ks-apiserver 2022/10/19T00:36:23.666

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/19T00:36:23.751

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666109183&end=1666110983&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:23.826

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:24.935

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/19T00:36:25.754

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666109185&end=1666110985&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:25.830

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/19T00:36:25.835

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666109185&end=1666110985&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:25.925

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:29.946

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:34.934

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:39.934

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:44.947

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:49.943

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:54.936

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:36:59.955

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:04.944

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:09.948

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:14.943

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:19.944

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:24.944

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:29.950

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:34.954

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:39.958

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:45.922

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:50.599

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:55.542

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:37:59.942

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:05.774

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:10.815

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:15.732

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:20.070

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:26.675

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:31.068

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:35.075

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:41.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:45.921

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:51.309

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:55.867

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:38:59.942

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:39:05.484

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:39:10.208

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:39:14.956

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:39:19.942

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:39:25.670

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:39:30.792

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:39:35.746

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:39:40.706

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:39:45.046

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:39:51.250

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:39:56.005

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:00.787

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:05.058

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:10.885

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:15.626

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:21.329

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:25.731

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:30.615

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:36.052

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:40.851

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:45.707

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:50.912

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:40:56.171

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:00.876

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:05.817

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:10.741

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:16.289

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:20.719

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:26.383

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:30.909

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:35.118

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:40.788

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:45.746

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:50.660

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:41:55.028

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:01.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:05.618

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:10.751

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:15.761

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:20.696

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:26.398

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:30.769

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:36.418

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:40.777

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:46.437

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:50.786

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:42:55.687

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:00.043

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:06.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:10.915

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:16.058

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:21.554

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:26.320

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:30.715

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:36.274

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:40.899

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:46.329

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:51.325

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:43:55.828

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T00:44:00.796

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666099444&end=1666111444&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/19T00:44:04.923

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T00:44:14.072

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T00:44:14.073

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/19T09:27:13.991

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T09:27:13.995

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/19T09:27:14.112

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/19T09:27:14.226

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T09:27:14.228

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/19T09:27:14.230

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/19T09:27:14.236

   <-- GET /kapis/clusters/host/version 2022/10/19T09:27:14.240

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/19T09:27:14.364

   <-- GET /kapis/clusters/host/version 2022/10/19T09:27:16.439

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/19T09:27:16.440

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/10/19T09:31:31.385

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/19T09:31:32.198

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?limit=-1&sortBy=createTime&page=1&annotation=kubesphere.io%2Fcreator 2022/10/19T09:31:32.199

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/19T09:31:33.293

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/10/19T09:31:33.511

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/19T09:31:33.512

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/19T10:33:35.684

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/19T10:33:36.984

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/10/19T10:33:38.724

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/10/19T10:33:38.736

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/10/19T10:33:38.797

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/10/19T10:33:38.903

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 2022/10/19T10:33:38.905

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 200 21ms 15b 2022/10/19T10:33:38.926

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1666145018&end=1666146818&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-rglpp%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T10:33:38.971

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/10/19T10:33:40.912

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1666145020&end=1666146820&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-rglpp%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T10:33:40.986

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/replicasets?labelSelector=kubesphere.io/username=wayne 2022/10/19T10:33:41.346

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/19T10:34:17.491

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/19T10:34:18.724

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?page=2&sortBy=updateTime&limit=10 2022/10/19T10:34:23.922

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system 2022/10/19T10:34:26.554

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/10/19T10:34:26.555

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/deployments/ks-installer 2022/10/19T10:34:26.628

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-installer&sortBy=startTime 2022/10/19T10:34:26.730

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-installer 2022/10/19T10:34:26.732

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-installer 200 19ms 15b 2022/10/19T10:34:26.750

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-installer&start=1666145066&end=1666146866&step=60s&times=30&resources_filter=ks-installer-57d7fd8859-62tk8%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T10:34:26.806

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-installer&sortBy=startTime 2022/10/19T10:34:28.714

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-installer&start=1666145068&end=1666146868&step=60s&times=30&resources_filter=ks-installer-57d7fd8859-62tk8%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T10:34:28.790

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/workloads/deployment/ks-installer/pods?sort_metric=pod_cpu_usage&limit=5&page=1 2022/10/19T10:34:30.737

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/workloads/deployment/ks-installer/pods?cluster=host&start=1666116870&end=1666146870&step=600s&times=50&resources_filter=ks-installer-57d7fd8859-62tk8%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%7Cpod_net_bytes_transmitted%7Cpod_net_bytes_received%24 2022/10/19T10:34:30.825

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/replicasets?labelSelector=app=ks-installer 2022/10/19T10:34:32.277

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/19T16:39:36.585

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/19T16:39:36.587

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/19T16:39:38.078

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/19T16:39:38.079

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/19T16:39:38.193

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/19T16:39:38.297

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/19T16:39:38.299

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/19T16:39:38.300

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/19T16:39:38.311

   <-- GET /kapis/clusters/host/version 2022/10/19T16:39:38.313

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/19T16:39:38.371

   <-- GET /kapis/clusters/host/version 2022/10/19T16:39:43.880

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/19T16:39:43.882

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/10/19T16:40:39.271

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system 2022/10/19T16:40:40.279

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-monitoring-system/members/admin/roles 2022/10/19T16:40:40.281

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/endpoints/prometheus-operated 2022/10/19T16:40:40.354

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/services/prometheus-operated 2022/10/19T16:40:40.355

   <-- GET /apis/clusters/host/monitoring.coreos.com/v1/namespaces/kubesphere-monitoring-system/servicemonitors?labelSelector=operated-prometheus%3Dtrue 2022/10/19T16:40:40.528

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/statefulsets?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/10/19T16:40:40.536

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/deployments?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/10/19T16:40:40.537

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/daemonsets?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/10/19T16:40:40.539

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/10/19T16:40:40.545

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/10/19T16:40:40.547

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1666167040&end=1666168840&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T16:40:40.722

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/10/19T16:40:42.486

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1666167042&end=1666168842&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T16:40:42.586

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T16:40:45.503

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T16:40:50.487

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T16:40:55.494

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/19T16:41:00.482

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/events?fieldSelector=involvedObject.name%3Dprometheus-operated%2CinvolvedObject.namespace%3Dkubesphere-monitoring-system%2CinvolvedObject.kind%3DService%2CinvolvedObject.uid%3D7ae72db5-da4f-49f0-ac1a-6a2cd1be6078 2022/10/19T16:41:05.452

   <-- GET / 2022/10/19T22:21:27.541

 UnauthorizedError: Not Login

     at Object.throw (/opt/kubesphere/console/server/server.js:22969:11)

     at getCurrentUser (/opt/kubesphere/console/server/server.js:6957:14)

     at renderView (/opt/kubesphere/console/server/server.js:71947:7)

     at runMicrotasks (<anonymous>)

     at processTicksAndRejections (internal/process/task_queues.js:97:5)

     at async /opt/kubesphere/console/server/server.js:40116:7

     at async logger (/opt/kubesphere/console/server/server.js:37060:7)

     at async /opt/kubesphere/console/server/server.js:31823:26

     at async /opt/kubesphere/console/server/server.js:31823:26

     at async /opt/kubesphere/console/server/server.js:31823:26

   --> GET / 302 4ms 43b 2022/10/19T22:21:27.544

   <-- GET /login 2022/10/19T22:21:27.548

   --> GET /login 200 4ms 16.91kb 2022/10/19T22:21:27.552

   <-- GET /clusters/host/projects/kubesphere-monitoring-system/services/prometheus-operated/events 2022/10/20T20:22:05.021

   --> GET /clusters/host/projects/kubesphere-monitoring-system/services/prometheus-operated/events 200 55ms 17.8kb 2022/10/20T20:22:05.076

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/20T20:22:07.044

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/20T20:22:07.048

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/20T20:22:07.232

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system 2022/10/20T20:22:07.284

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-monitoring-system/members/admin/roles 2022/10/20T20:22:07.285

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/services/prometheus-operated 2022/10/20T20:22:07.323

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/endpoints/prometheus-operated 2022/10/20T20:22:07.349

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/events?fieldSelector=involvedObject.name%3Dprometheus-operated%2CinvolvedObject.namespace%3Dkubesphere-monitoring-system%2CinvolvedObject.kind%3DService%2CinvolvedObject.uid%3D7ae72db5-da4f-49f0-ac1a-6a2cd1be6078 2022/10/20T20:22:07.397

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/10/20T20:22:08.934

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/10/20T20:22:10.079

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?limit=10&page=1&sortBy=createTime 2022/10/20T20:22:22.287

   <-- GET /clusters/host/services?limit=10&page=1 2022/10/20T20:22:23.582

   --> GET /clusters/host/services?limit=10&page=1 200 47ms 17.8kb 2022/10/20T20:22:23.629

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/20T20:22:25.542

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/20T20:22:25.543

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/20T20:22:25.742

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?limit=10&page=1&sortBy=createTime 2022/10/20T20:22:25.818

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?limit=10&page=1&sortBy=createTime 2022/10/20T20:22:26.947

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/21T16:50:04.727

   <-- GET /kapis/clusters/host/version 2022/10/21T16:50:04.728

   <-- GET /login?referer=/clusters/host/base-info 2022/10/21T16:50:05.140

   --> GET /login?referer=/clusters/host/base-info 200 5ms 16.91kb 2022/10/21T16:50:05.145

   <-- GET /login?referer=/clusters/host/base-info 2022/10/21T16:50:07.589

   --> GET /login?referer=/clusters/host/base-info 200 5ms 16.91kb 2022/10/21T16:50:07.594

   <-- POST /login 2022/10/21T16:50:15.379

   --> POST /login 302 118ms 79b 2022/10/21T16:50:15.497

   <-- GET /clusters/host/base-info 2022/10/21T16:50:15.522

   --> GET /clusters/host/base-info 200 63ms 17.8kb 2022/10/21T16:50:15.585

   <-- GET /clusters/host/base-info 2022/10/21T16:50:15.656

   --> GET /clusters/host/base-info 200 49ms 17.8kb 2022/10/21T16:50:15.704

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/21T16:50:17.590

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/21T16:50:17.592

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/21T16:50:17.760

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/21T16:50:17.838

   <-- GET /kapis/clusters/host/version 2022/10/21T16:50:17.839

   <-- GET /kapis/clusters/host/version 2022/10/21T16:55:16.873

   <-- GET /kapis/version 2022/10/21T16:55:29.095

   <-- GET /kapis/version 2022/10/21T16:57:13.885

   <-- GET /kapis/version 2022/10/21T16:57:37.007

   <-- GET /kapis/version 2022/10/21T16:58:23.601

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/25T10:50:12.278

 Unauthorized Response {

   size: 0,

   timeout: 0,

   [Symbol(Body internals)]: {

     body: PassThrough {

       _readableState: [ReadableState],

       readable: false,

       _events: [Object: null prototype],

       _eventsCount: 4,

       _maxListeners: undefined,

       _writableState: [WritableState],

       writable: false,

       allowHalfOpen: true,

       _transformState: [Object],

       [Symbol(kCapture)]: false

     },

     disturbed: true,

     error: null

   },

   [Symbol(Response internals)]: {

     url: 'http://ks-apiserver/oauth/token',

     status: 401,

     statusText: 'Unauthorized',

     headers: Headers { [Symbol(map)]: [Object: null prototype] },

     counter: 0

   }

 } false

 {

   code: 401,

   kind: 'Status',

   apiVersion: 'v1',

   metadata: {},

   status: 'Failure',

   message: 'Unauthorized: signature is invalid',

   reason: 'Unauthorized',

   statusText: 'Unauthorized'

 }

   --> GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 401 8ms 178b 2022/10/25T10:50:12.286

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/25T10:50:12.291

 Unauthorized Response {

   size: 0,

   timeout: 0,

   [Symbol(Body internals)]: {

     body: PassThrough {

       _readableState: [ReadableState],

       readable: false,

       _events: [Object: null prototype],

       _eventsCount: 4,

       _maxListeners: undefined,

       _writableState: [WritableState],

       writable: false,

       allowHalfOpen: true,

       _transformState: [Object],

       [Symbol(kCapture)]: false

     },

     disturbed: true,

     error: null

   },

   [Symbol(Response internals)]: {

     url: 'http://ks-apiserver/oauth/token',

     status: 401,

     statusText: 'Unauthorized',

     headers: Headers { [Symbol(map)]: [Object: null prototype] },

     counter: 0

   }

 } false

 {

   code: 401,

   kind: 'Status',

   apiVersion: 'v1',

   metadata: {},

   status: 'Failure',

   message: 'Unauthorized: signature is invalid',

   reason: 'Unauthorized',

   statusText: 'Unauthorized'

 }

   --> GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 401 4ms 178b 2022/10/25T10:50:12.295

   <-- GET /clusters 2022/10/25T10:50:13.588

 Unauthorized Response {

   size: 0,

   timeout: 0,

   [Symbol(Body internals)]: {

     body: PassThrough {

       _readableState: [ReadableState],

       readable: false,

       _events: [Object: null prototype],

       _eventsCount: 4,

       _maxListeners: undefined,

       _writableState: [WritableState],

       writable: false,

       allowHalfOpen: true,

       _transformState: [Object],

       [Symbol(kCapture)]: false

     },

     disturbed: true,

     error: null

   },

   [Symbol(Response internals)]: {

     url: 'http://ks-apiserver/api/v1/namespaces/kubesphere-system/configmaps/kubesphere-config',

     status: 401,

     statusText: 'Unauthorized',

     headers: Headers { [Symbol(map)]: [Object: null prototype] },

     counter: 0

   }

 } false

 {

   code: 401,

   kind: 'Status',

   apiVersion: 'v1',

   metadata: {},

   status: 'Failure',

   message: 'Unauthorized: signature is invalid',

   reason: 'Unauthorized',

   statusText: 'Unauthorized'

 }

 Unauthorized Response {

   size: 0,

   timeout: 0,

   [Symbol(Body internals)]: {

     body: PassThrough {

       _readableState: [ReadableState],

       readable: false,

       _events: [Object: null prototype],

       _eventsCount: 4,

       _maxListeners: undefined,

       _writableState: [WritableState],

       writable: false,

       allowHalfOpen: true,

       _transformState: [Object],

       [Symbol(kCapture)]: false

     },

     disturbed: true,

     error: null

   },

   [Symbol(Response internals)]: {

     url: 'http://ks-apiserver/kapis/iam.kubesphere.io/v1alpha2/users/admin',

     status: 401,

     statusText: 'Unauthorized',

     headers: Headers { [Symbol(map)]: [Object: null prototype] },

     counter: 0

   }

 } false

 {

   code: 401,

   kind: 'Status',

   apiVersion: 'v1',

   metadata: {},

   status: 'Failure',

   message: 'Unauthorized: signature is invalid',

   reason: 'Unauthorized',

   statusText: 'Unauthorized'

 }

   --> GET /clusters 302 9ms 79b 2022/10/25T10:50:13.597

 Unauthorized Response {

   size: 0,

   timeout: 0,

   [Symbol(Body internals)]: {

     body: PassThrough {

       _readableState: [ReadableState],

       readable: false,

       _events: [Object: null prototype],

       _eventsCount: 4,

       _maxListeners: undefined,

       _writableState: [WritableState],

       writable: false,

       allowHalfOpen: true,

       _transformState: [Object],

       [Symbol(kCapture)]: false

     },

     disturbed: true,

     error: null

   },

   [Symbol(Response internals)]: {

     url: 'http://ks-apiserver/kapis/version',

     status: 401,

     statusText: 'Unauthorized',

     headers: Headers { [Symbol(map)]: [Object: null prototype] },

     counter: 0

   }

 } false

 Unauthorized Response {

   size: 0,

   timeout: 0,

   [Symbol(Body internals)]: {

     body: PassThrough {

       _readableState: [ReadableState],

       readable: false,

       _events: [Object: null prototype],

       _eventsCount: 4,

       _maxListeners: undefined,

       _writableState: [WritableState],

       writable: false,

       allowHalfOpen: true,

       _transformState: [Object],

       [Symbol(kCapture)]: false

     },

     disturbed: true,

     error: null

   },

   [Symbol(Response internals)]: {

     url: 'http://ks-apiserver/api/v1/nodes',

     status: 401,

     statusText: 'Unauthorized',

     headers: Headers { [Symbol(map)]: [Object: null prototype] },

     counter: 0

   }

 } false

 {

   code: 401,

   kind: 'Status',

   apiVersion: 'v1',

   metadata: {},

   status: 'Failure',

   message: 'Unauthorized: signature is invalid',

   reason: 'Unauthorized',

   statusText: 'Unauthorized'

 }

 Unauthorized Response {

   size: 0,

   timeout: 0,

   [Symbol(Body internals)]: {

     body: PassThrough {

       _readableState: [ReadableState],

       readable: false,

       _events: [Object: null prototype],

       _eventsCount: 4,

       _maxListeners: undefined,

       _writableState: [WritableState],

       writable: false,

       allowHalfOpen: true,

       _transformState: [Object],

       [Symbol(kCapture)]: false

     },

     disturbed: true,

     error: null

   },

   [Symbol(Response internals)]: {

     url: 'http://ks-apiserver/kapis/config.kubesphere.io/v1alpha2/configs/gpu/kinds',

     status: 401,

     statusText: 'Unauthorized',

     headers: Headers { [Symbol(map)]: [Object: null prototype] },

     counter: 0

   }

 } false

 {

   code: 401,

   kind: 'Status',

   apiVersion: 'v1',

   metadata: {},

   status: 'Failure',

   message: 'Unauthorized: signature is invalid',

   reason: 'Unauthorized',

   statusText: 'Unauthorized'

 }

   <-- GET /login?referer=/clusters 2022/10/25T10:50:13.638

   --> GET /login?referer=/clusters 200 5ms 16.91kb 2022/10/25T10:50:13.642

   <-- POST /login 2022/10/25T10:50:17.552

   --> POST /login 302 113ms 49b 2022/10/25T10:50:17.665

   <-- GET /clusters 2022/10/25T10:50:17.694

   --> GET /clusters 200 83ms 17.8kb 2022/10/25T10:50:17.777

   <-- GET /clusters 2022/10/25T10:50:17.837

   --> GET /clusters 200 56ms 17.8kb 2022/10/25T10:50:17.893

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/25T10:50:18.278

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/25T10:50:18.279

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/25T10:52:27.397

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/25T10:52:27.400

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/25T10:52:27.540

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/25T10:52:27.680

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/25T10:52:27.682

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/25T10:52:27.682

   <-- GET /kapis/clusters/host/version 2022/10/25T10:52:27.687

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/25T10:52:27.688

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/25T10:52:27.763

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/25T10:52:32.833

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/25T10:52:34.042

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/10/25T10:52:44.850

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system 2022/10/25T10:52:44.852

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/deployments/ks-apiserver 2022/10/25T10:52:44.936

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/25T10:52:45.060

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-apiserver 2022/10/25T10:52:45.064

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-apiserver 200 15ms 15b 2022/10/25T10:52:45.079

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666664564&end=1666666364&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/25T10:52:45.118

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/25T10:52:47.029

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666664566&end=1666666366&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/25T10:52:47.085

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/25T10:52:50.064

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 2022/10/25T10:52:50.197

   <-- GET /terminal/cluster/host/projects/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v/containers/ks-apiserver 2022/10/25T10:52:53.645

   --> GET /terminal/cluster/host/projects/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v/containers/ks-apiserver 200 38ms 4.03kb 2022/10/25T10:52:53.683

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 2022/10/25T10:52:54.232

   <-- GET /kapis/clusters/host/terminal.kubesphere.io/v1alpha2/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v/exec?container=ks-apiserver&shell=sh 2022/10/25T10:52:54.414

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 2022/10/25T10:53:03.629

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 200 19ms 14b 2022/10/25T10:53:03.648

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v/log?container=ks-apiserver&tailLines=1000&timestamps=true&follow=false 2022/10/25T10:53:03.677

   <-- GET / 2022/10/25T11:09:42.987

   --> GET / 200 60ms 17.8kb 2022/10/25T11:09:43.047

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1666655383&end=1666667383&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/25T11:09:43.439

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 2022/10/25T11:09:50.987

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 200 18ms 14b 2022/10/25T11:09:51.005

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v/log?container=ks-apiserver&tailLines=1000&timestamps=true&follow=false 2022/10/25T11:09:51.038

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/25T11:10:01.848

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/25T11:10:01.850

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/25T11:10:01.978

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/25T11:10:02.137

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/25T11:10:02.139

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/25T11:10:02.140

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/25T11:10:02.148

   <-- GET /kapis/clusters/host/version 2022/10/25T11:10:02.151

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/25T11:10:02.258

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/10/25T11:10:04.862

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/10/25T11:10:04.865

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/10/25T11:10:04.973

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 2022/10/25T11:10:11.072

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 200 17ms 14b 2022/10/25T11:10:11.089

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v/log?container=ks-apiserver&tailLines=1000&timestamps=true&follow=false 2022/10/25T11:10:11.123

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 2022/10/25T11:10:13.770

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 200 19ms 14b 2022/10/25T11:10:13.789

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v/log?container=ks-apiserver&tailLines=1000&timestamps=true&follow=true 2022/10/25T11:10:13.819

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/10/25T11:10:19.677

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1666663819&end=1666667419&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/10/25T11:10:19.787

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/10/25T11:10:21.634

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1666665621&end=1666667421&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%7Cnotification-manager-deployment-78664576cb-qkhz2%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/25T11:10:21.815

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/10/25T11:10:35.270

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/10/25T11:10:35.271

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/10/25T11:10:35.366

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/25T11:10:37.135

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components/ks-console 2022/10/25T11:10:38.234

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/services/ks-console 2022/10/25T11:10:38.327

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&sortBy=startTime 2022/10/25T11:10:38.426

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&start=1666665638&end=1666667438&step=60s&times=30&resources_filter=ks-console-54bd5bcbc6-mllfz%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/25T11:10:38.510

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&sortBy=startTime 2022/10/25T11:10:40.437

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&start=1666665640&end=1666667440&step=60s&times=30&resources_filter=ks-console-54bd5bcbc6-mllfz%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/25T11:10:40.527

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/25T11:10:42.253

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/10/25T11:10:43.326

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/10/25T11:10:43.404

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/10/25T11:10:44.443

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/10/25T11:10:44.522

   <-- GET /api/clusters/host/v1/namespaces/kubekey-system 2022/10/25T11:10:44.863

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubekey-system/members/admin/roles 2022/10/25T11:10:44.868

   <-- GET /api/clusters/host/v1/namespaces/kubekey-system 2022/10/25T11:10:44.958

   <-- GET /api/clusters/host/v1/namespaces/kubekey-system/limitranges 2022/10/25T11:10:44.961

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/namespaces/kubekey-system/quotas 2022/10/25T11:10:44.969

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubekey-system?namespace=kubekey-system&start=1666624244&end=1666667444&step=4320s&times=10&metrics_filter=namespace_pod_count%7Cnamespace_deployment_count%7Cnamespace_statefulset_count%7Cnamespace_daemonset_count%7Cnamespace_job_count%7Cnamespace_cronjob_count%7Cnamespace_pvc_count%7Cnamespace_service_count%7Cnamespace_secret_count%7Cnamespace_configmap_count%7Cnamespace_ingresses_extensions_count%24 2022/10/25T11:10:45.066

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/namespaces/kubekey-system/quotas 2022/10/25T11:10:45.069

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/namespaces/kubekey-system/abnormalworkloads 2022/10/25T11:10:45.071

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/statefulsets?sortBy=createTime&limit=10 2022/10/25T11:10:46.115

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/statefulsets?sortBy=createTime&limit=10 2022/10/25T11:10:47.249

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/25T11:10:48.116

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/25T11:10:48.118

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/25T11:10:48.119

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/25T11:10:48.121

   <-- GET /kapis/clusters/host/version 2022/10/25T11:10:48.125

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/25T11:10:48.215

 Error: Http response closed while proxying /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v/log?container=ks-apiserver&tailLines=1000&timestamps=true&follow=true

     at ServerResponse.<anonymous> (/opt/kubesphere/console/server/server.js:48638:14)

     at ServerResponse.emit (events.js:326:22)

     at Socket.onServerResponseClose (_http_server.js:209:44)

     at Socket.emit (events.js:326:22)

     at TCP.<anonymous> (net.js:675:12)

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 2022/10/25T11:11:02.265

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v 200 26ms 14b 2022/10/25T11:11:02.291

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-apiserver-7c8c448bbb-4682v/log?container=ks-apiserver&tailLines=1000&timestamps=true&follow=false 2022/10/25T11:11:02.324

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/deployments/ks-apiserver 2022/10/25T11:11:11.565

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/25T11:11:11.673

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-apiserver 2022/10/25T11:11:11.675

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-apiserver 200 36ms 15b 2022/10/25T11:11:11.711

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666665671&end=1666667471&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/25T11:11:11.759

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/10/25T11:11:13.670

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1666665673&end=1666667473&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/25T11:11:13.767

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/25T11:11:14.085

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/25T11:11:15.371

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?page=2&sortBy=updateTime&limit=10 2022/10/25T11:11:21.779

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system 2022/10/25T11:11:23.972

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/10/25T11:11:23.975

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/deployments/ks-console 2022/10/25T11:11:24.047

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&sortBy=startTime 2022/10/25T11:11:24.149

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-console 2022/10/25T11:11:24.152

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-console 200 19ms 15b 2022/10/25T11:11:24.171

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&start=1666665683&end=1666667483&step=60s&times=30&resources_filter=ks-console-54bd5bcbc6-mllfz%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/25T11:11:24.207

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/10/25T11:11:26.061

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&sortBy=startTime 2022/10/25T11:11:26.143

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&start=1666665685&end=1666667485&step=60s&times=30&resources_filter=ks-console-54bd5bcbc6-mllfz%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/25T11:11:26.250

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/10/25T11:11:29.727

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 19ms 14b 2022/10/25T11:11:29.746

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=1000&timestamps=true&follow=false 2022/10/25T11:11:29.783

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/10/25T11:11:40.010

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 19ms 14b 2022/10/25T11:11:40.029

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=1000&timestamps=true&follow=true 2022/10/25T11:11:40.071

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/25T11:11:55.744

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/10/25T11:11:58.084

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/10/25T11:11:58.165

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/10/25T11:11:59.209

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/10/25T11:11:59.287

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/deployments?sortBy=updateTime&limit=10 2022/10/25T11:12:01.212

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/deployments?sortBy=updateTime&limit=10 2022/10/25T11:12:02.397

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/jobs?sortBy=updateTime&limit=10 2022/10/25T11:12:03.683

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/pods?sortBy=startTime&limit=10 2022/10/25T11:12:05.154

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/services?sortBy=createTime&limit=10 2022/10/25T11:12:05.967

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/pods?sortBy=startTime&limit=10 2022/10/25T11:12:06.450

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/ingresses?sortBy=createTime&limit=10 2022/10/25T11:12:06.710

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/services?sortBy=createTime&limit=10 2022/10/25T11:12:07.117

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/configmaps?sortBy=createTime&limit=10 2022/10/25T11:12:09.748

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/configmaps?sortBy=createTime&limit=10 2022/10/25T11:12:11.033

   <-- GET /api/clusters/host/v1/namespaces/kubekey-system 2022/10/25T11:12:11.455

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubekey-system/members/admin/roles 2022/10/25T11:12:11.457

   <-- GET /api/clusters/host/v1/namespaces/kubekey-system/configmaps/kube-root-ca.crt 2022/10/25T11:12:11.532

 Error: Http response closed while proxying /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=1000&timestamps=true&follow=true

     at ServerResponse.<anonymous> (/opt/kubesphere/console/server/server.js:48638:14)

     at ServerResponse.emit (events.js:326:22)

     at Socket.onServerResponseClose (_http_server.js:209:44)

     at Socket.emit (events.js:326:22)

     at TCP.<anonymous> (net.js:675:12)

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/26T09:55:30.249

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/26T09:55:30.251

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/26T09:55:32.400

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/26T09:55:32.401

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/26T09:55:32.535

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/26T09:55:32.666

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/26T09:55:32.668

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/26T09:55:32.670

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/26T09:55:32.672

   <-- GET /kapis/clusters/host/version 2022/10/26T09:55:32.678

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/26T09:55:32.775

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/26T09:55:37.498

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?limit=-1&sortBy=createTime&page=1&annotation=kubesphere.io%2Fcreator 2022/10/26T09:55:37.499

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/10/26T09:55:38.450

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/26T09:55:38.452

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/26T09:55:38.586

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/26T09:55:40.715

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?limit=-1&sortBy=createTime&page=1&annotation=kubesphere.io%2Fcreator 2022/10/26T09:55:40.716

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/10/26T09:55:41.811

   <-- GET /kapis/clusters/host/gateway.kubesphere.io/v1alpha1/namespaces/kubesphere-system/gateways 2022/10/26T09:55:42.989

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/26T09:55:44.025

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/10/26T09:55:44.026

   <-- GET /kapis/clusters/host/version 2022/10/26T09:55:48.506

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/10/26T09:55:48.508

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/10/26T09:55:58.742

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/10/26T09:56:00.842

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/10/26T09:56:00.945

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/10/26T09:56:13.000

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/10/26T09:56:16.659

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/10/26T09:57:26.034

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/10/26T09:57:26.872

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/10/26T09:59:14.360

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/26T09:59:17.172

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components/ks-console 2022/10/26T10:02:01.018

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/services/ks-console 2022/10/26T10:02:01.157

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&sortBy=startTime 2022/10/26T10:02:01.246

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&start=1666747921&end=1666749721&step=60s&times=30&resources_filter=ks-console-54bd5bcbc6-mllfz%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/26T10:02:01.332

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&sortBy=startTime 2022/10/26T10:02:03.246

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&start=1666747923&end=1666749723&step=60s&times=30&resources_filter=ks-console-54bd5bcbc6-mllfz%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/26T10:02:03.330

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&resources_filter=ks-console-54bd5bcbc6-mllfz%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/10/26T10:02:06.253

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/26T10:02:08.861

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/26T10:24:42.355

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/10/26T10:24:43.731

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=%21kubesphere.io%2Fkubefed-host-namespace%2C%21kubesphere.io%2Fdevopsproject 2022/10/26T10:24:44.482

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/10/26T10:24:44.487

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/10/26T16:33:04.248

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/10/26T16:33:06.477

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/10/26T16:33:06.714

   <-- GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 2022/10/28T14:53:10.507

   --> GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 200 60ms 17.8kb 2022/10/28T14:53:10.567

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/28T14:53:12.516

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/28T14:53:12.520

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/28T14:53:12.654

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/10/28T14:53:12.746

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/10/28T14:53:12.822

   <-- GET / 2022/10/31T20:25:44.466

   --> GET / 200 54ms 17.8kb 2022/10/31T20:25:44.520

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1667207146&end=1667219146&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/31T20:25:46.243

   <-- POST /logout 2022/10/31T20:25:50.985

   --> POST /logout 302 4ms 43b 2022/10/31T20:25:50.989

   <-- GET /login 2022/10/31T20:25:51.012

   --> GET /login 200 7ms 16.91kb 2022/10/31T20:25:51.019

   <-- GET /login 2022/10/31T20:25:51.052

   --> GET /login 200 4ms 16.91kb 2022/10/31T20:25:51.056

   <-- GET / 2022/10/31T22:10:53.876

 UnauthorizedError: Not Login

     at Object.throw (/opt/kubesphere/console/server/server.js:22969:11)

     at getCurrentUser (/opt/kubesphere/console/server/server.js:6957:14)

     at renderView (/opt/kubesphere/console/server/server.js:71947:7)

     at runMicrotasks (<anonymous>)

     at processTicksAndRejections (internal/process/task_queues.js:97:5)

     at async /opt/kubesphere/console/server/server.js:40116:7

     at async logger (/opt/kubesphere/console/server/server.js:37060:7)

     at async /opt/kubesphere/console/server/server.js:31823:26

     at async /opt/kubesphere/console/server/server.js:31823:26

     at async /opt/kubesphere/console/server/server.js:31823:26

   --> GET / 302 3ms 43b 2022/10/31T22:10:53.879

   <-- GET /login 2022/10/31T22:10:53.901

   --> GET /login 200 3ms 16.91kb 2022/10/31T22:10:53.904

   <-- POST /login 2022/10/31T22:10:57.246

   --> POST /login 302 111ms 33b 2022/10/31T22:10:57.357

   <-- GET / 2022/10/31T22:10:57.379

   --> GET / 200 72ms 17.8kb 2022/10/31T22:10:57.451

   <-- GET / 2022/10/31T22:10:57.481

   --> GET / 200 50ms 17.8kb 2022/10/31T22:10:57.531

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1667213457&end=1667225457&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/10/31T22:10:57.785

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/10/31T22:11:00.640

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/10/31T22:11:00.641

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/10/31T22:21:22.236

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/10/31T22:21:22.237

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/10/31T22:21:22.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/10/31T22:21:22.482

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/10/31T22:21:22.483

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/10/31T22:21:22.484

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/10/31T22:21:22.491

   <-- GET /kapis/clusters/host/version 2022/10/31T22:21:22.492

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/10/31T22:21:22.617

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/10/31T22:21:26.053

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/31T22:21:26.055

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles/cluster-viewer 2022/10/31T22:21:33.097

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/31T22:21:33.099

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?clusterrole=cluster-viewer&sortBy=createTime&limit=10 2022/10/31T22:21:36.275

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/10/31T22:21:37.875

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/10/31T22:21:37.877

   <-- GET / 2022/11/01T01:47:50.945

   --> GET / 200 59ms 17.8kb 2022/11/01T01:47:51.004

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1667226472&end=1667238472&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/11/01T01:47:52.688

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/11/01T01:47:55.754

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/11/01T01:47:55.756

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/11/01T17:21:37.217

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/11/01T17:21:45.819

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/11/01T17:21:45.820

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles/cluster-viewer 2022/11/01T17:21:48.715

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/11/01T17:21:48.716

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?clusterrole=cluster-viewer&sortBy=createTime&limit=10 2022/11/01T17:21:50.415

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/11/01T17:21:55.056

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/11/01T17:21:55.057

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?limit=-1&sortBy=createTime&page=1&annotation=kubesphere.io%2Fcreator 2022/11/01T17:23:08.202

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/11/01T17:23:08.203

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/11/01T17:23:09.382

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/11/01T17:23:09.605

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/11/01T17:23:29.308

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/01T17:23:29.408

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/11/01T17:23:30.472

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/01T17:23:30.542

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/01T17:23:34.091

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/01T17:34:33.341

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/01T17:34:33.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/01T17:34:33.828

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/11/01T17:35:01.642

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667291701&end=1667295301&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/11/01T17:35:01.778

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/01T17:35:09.800

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/01T17:35:09.802

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/01T17:35:10.112

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/11/01T17:35:13.818

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667291713&end=1667295313&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/11/01T17:35:14.073

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/11/01T17:35:20.429

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1667293520&end=1667295320&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%7Cnotification-manager-deployment-78664576cb-qkhz2%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/01T17:35:20.728

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667265326&end=1667295326&step=600s&times=50&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_load1%7Cnode_load5%7Cnode_load15%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_disk_inode_utilisation%7Cnode_device_size_utilisation%7Cnode_disk_inode_usage%7Cnode_disk_inode_total%7Cnode_disk_read_iops%7Cnode_disk_write_iops%7Cnode_disk_read_throughput%7Cnode_disk_write_throughput%7Cnode_net_bytes_transmitted%7Cnode_net_bytes_received%24 2022/11/01T17:35:27.120

   <-- GET /api/clusters/host/v1/events?fieldSelector=involvedObject.name%3Di-n0vhwq18%2CinvolvedObject.kind%3DNode 2022/11/01T17:35:28.647

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667291730&end=1667295330&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/11/01T17:35:30.308

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/01T17:35:31.265

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/01T17:35:31.266

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/01T17:35:31.597

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/11/01T17:38:32.364

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/01T17:38:32.548

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/11/01T17:38:33.562

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/01T17:38:33.627

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%3Dsystem-workspace 2022/11/01T17:38:46.954

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kube-federation-system%7Ckubesphere-monitoring-federated%7Ckubesphere-controls-system%7Ckubesphere-system%7Ckubesphere-monitoring-system%7Cdefault%7Ckube-system%7Ckube-public%7Ckube-node-lease%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/01T17:38:47.361

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/11/01T17:38:50.863

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/01T17:38:51.147

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/01T17:38:56.411

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/01T17:38:57.906

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/jobs?sortBy=updateTime&limit=10 2022/11/01T17:39:00.291

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/01T17:39:02.014

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/01T17:39:03.035

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/01T17:39:03.403

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/01T17:39:04.228

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/01T17:39:04.659

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/01T17:39:06.034

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/ingresses?sortBy=createTime&limit=10 2022/11/01T17:39:06.353

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/01T17:39:10.646

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/01T17:39:10.651

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/01T17:39:10.902

   <-- GET /clusters/host/nodes 2022/11/03T14:17:39.441

   --> GET /clusters/host/nodes 200 55ms 17.8kb 2022/11/03T14:17:39.496

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/03T14:17:41.518

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/03T14:17:41.520

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/03T14:17:41.699

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/03T14:17:41.764

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/03T14:17:41.766

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/03T14:17:41.823

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1667445310&end=1667457310&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/11/03T14:35:10.463

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/11/03T14:43:02.174

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/11/03T14:43:02.189

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/03T14:43:03.705

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/03T14:43:03.706

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/03T14:43:03.826

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/03T14:43:03.939

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/11/03T14:43:03.941

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/11/03T14:43:03.943

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/11/03T14:43:03.947

   <-- GET /kapis/clusters/host/version 2022/11/03T14:43:03.948

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/11/03T14:43:04.016

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/03T14:43:06.609

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/03T14:43:06.613

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/03T14:43:06.700

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/11/03T14:43:07.628

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667454187&end=1667457787&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/11/03T14:43:07.737

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/11/03T14:43:15.749

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1667455995&end=1667457795&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%7Cnotification-manager-deployment-78664576cb-qkhz2%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:43:15.904

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/03T14:43:17.223

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/03T14:43:17.225

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/03T14:43:17.286

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/03T14:43:20.255

   --> GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 200 20ms 14b 2022/11/03T14:43:20.275

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/log?container=kubectl&tailLines=1000&timestamps=true&follow=false 2022/11/03T14:43:20.302

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9?cluster=host&start=1667427807&end=1667457807&step=600s&times=50&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%7Cpod_net_bytes_transmitted%7Cpod_net_bytes_received%24 2022/11/03T14:43:27.893

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/events?fieldSelector=involvedObject.name%3Dkubectl-wayne-758fcc6996-cpjx9%2CinvolvedObject.namespace%3Dkubesphere-controls-system%2CinvolvedObject.kind%3DPod%2CinvolvedObject.uid%3D35a8c433-ea02-4f59-b2ad-ff35960e74b7 2022/11/03T14:43:33.770

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/03T14:43:35.439

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/11/03T14:43:58.972

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/11/03T14:43:59.067

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1667456038&end=1667457838&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%7Cnotification-manager-deployment-78664576cb-qkhz2%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:43:59.209

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&resources_filter=kubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%7Cnotification-manager-deployment-78664576cb-qkhz2%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:44:04.075

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system 2022/11/03T14:44:04.491

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kube-federation-system/members/admin/roles 2022/11/03T14:44:04.493

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl 2022/11/03T14:44:04.599

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl 2022/11/03T14:44:08.308

   --> GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl 200 20ms 14b 2022/11/03T14:44:08.328

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl/log?container=controller-manager&tailLines=1000&timestamps=true&follow=false 2022/11/03T14:44:08.353

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/11/03T14:45:47.752

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/11/03T14:45:47.840

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1667456147&end=1667457947&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%7Cnotification-manager-deployment-78664576cb-qkhz2%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:45:47.970

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/03T14:45:49.708

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/03T14:45:49.710

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/03T14:45:49.849

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T14:46:33.315

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T14:46:34.529

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/03T14:46:35.128

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/03T14:46:35.130

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/03T14:46:35.232

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T14:46:35.347

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 2022/11/03T14:46:35.348

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 200 16ms 15b 2022/11/03T14:46:35.364

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667456195&end=1667457995&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:46:35.417

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T14:46:37.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667456197&end=1667457997&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:46:37.445

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:46:40.356

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/limitranges 2022/11/03T14:46:43.955

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/secrets?fieldSelector=type%3Dkubernetes.io%2Fdockerconfigjson 2022/11/03T14:46:43.957

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/persistentvolumeclaims?limit=-1&sortBy=createTime&page=1 2022/11/03T14:46:44.484

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/03T14:46:44.489

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:46:45.362

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/deployments?limit=-1&sortBy=updateTime&page=1 2022/11/03T14:46:46.220

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:46:50.362

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/03T14:46:50.991

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T14:46:51.071

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667456210&end=1667458010&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:46:51.145

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T14:46:53.077

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667456212&end=1667458012&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:46:53.152

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T14:46:53.159

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667456212&end=1667458012&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:46:53.220

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:46:55.361

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:00.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:05.361

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:10.354

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:15.440

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:20.357

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:25.363

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:30.357

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:35.361

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:40.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:45.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:50.360

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:47:55.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:00.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:05.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:10.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:15.382

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:20.354

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:25.365

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:30.358

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:35.361

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:40.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:45.358

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:50.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:48:55.365

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:00.370

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:05.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:10.356

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:15.360

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:20.372

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:25.447

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:30.365

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:35.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:40.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:45.363

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:50.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:49:55.373

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:00.362

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/03T14:50:04.589

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T14:50:04.663

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667456404&end=1667458204&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:04.742

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:05.356

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T14:50:06.681

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667456406&end=1667458206&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:06.755

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T14:50:08.686

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667456408&end=1667458208&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:08.759

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:10.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:15.371

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:20.358

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:25.362

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:30.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:35.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:40.363

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:45.359

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:50.356

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:50:55.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:00.368

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:05.357

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:10.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:15.358

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:20.360

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:25.378

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:30.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:35.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:40.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:45.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:50.373

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:51:55.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:00.364

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:05.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:10.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:15.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:20.356

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:25.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:30.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:35.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:40.363

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:45.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:50.356

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:52:55.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:00.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:05.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:10.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:15.363

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:20.358

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:25.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:30.358

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:35.365

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:40.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:45.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:50.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:53:55.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:00.374

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:05.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:10.360

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:15.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:20.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:25.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:30.364

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:35.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:40.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:45.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:50.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:54:55.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:00.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:05.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:10.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:15.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:20.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:25.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:30.358

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:35.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:40.360

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:45.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:50.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:55:55.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:00.356

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:05.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:10.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:15.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:20.354

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:25.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:30.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:35.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:40.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:45.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:50.357

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:56:55.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:00.357

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:05.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:10.357

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:15.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:20.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:25.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:30.354

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:35.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:40.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:45.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:50.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:57:55.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:00.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:05.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:10.354

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:15.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:20.356

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:25.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:30.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:35.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:40.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:45.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:50.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:58:55.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:00.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:05.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:10.354

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:15.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:20.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:25.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:30.465

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:35.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:40.363

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:45.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:50.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T14:59:55.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:00.368

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:05.360

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:10.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:15.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:20.360

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:25.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:30.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:35.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:40.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:45.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:50.362

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:00:55.365

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:00.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:05.357

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:10.364

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:15.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:20.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:25.357

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:30.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:35.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:40.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:45.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:50.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:01:55.357

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:00.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:05.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:10.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:15.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:20.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:25.356

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:30.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:35.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:40.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:45.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:50.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:02:55.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:00.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:05.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:10.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:15.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:20.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:25.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:30.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:35.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:40.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:45.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:50.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:03:55.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:00.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:05.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:10.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:15.354

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:20.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:25.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:30.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:35.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:40.362

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:45.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:50.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:04:55.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:00.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:05.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:10.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:15.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:20.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:25.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:30.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:35.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:40.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:45.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:50.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:05:55.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:00.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:05.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:10.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:15.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:20.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:25.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:30.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:35.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:40.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:45.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:50.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:06:55.355

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:00.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:05.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:10.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:15.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:20.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:25.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:30.357

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:35.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:40.354

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:45.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:50.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:07:55.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:00.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:05.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:10.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:15.413

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:20.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:25.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:30.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:35.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:40.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:45.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:50.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:08:55.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:00.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:05.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:10.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:15.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:20.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:25.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:30.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:35.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:40.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:45.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:50.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:09:55.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:00.358

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:05.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:10.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:15.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:20.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:25.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:30.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:35.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:40.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:45.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:50.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:10:55.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:00.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:05.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:10.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:15.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:20.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:25.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:30.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:35.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:40.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:45.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:50.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:11:55.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:00.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:05.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:10.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:15.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:20.340

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:25.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:30.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:35.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:40.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:45.350

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:50.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:12:55.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:00.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:05.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:10.340

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:15.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:20.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:25.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:30.361

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:35.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:40.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:45.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:50.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:13:55.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:00.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:05.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:10.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:15.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:20.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:25.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:30.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:35.340

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:40.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:45.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:50.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:14:55.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:00.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:05.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:10.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:15.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:20.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:25.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:30.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:35.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:40.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:45.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:50.351

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:15:55.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:00.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:05.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:10.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:15.340

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:20.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:25.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:30.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:35.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:40.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:45.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:50.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:16:55.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:00.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:05.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:10.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:15.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:20.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:25.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:30.348

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:35.352

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:40.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:45.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:50.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:17:55.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:00.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:05.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:10.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:15.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:20.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:25.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:30.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:35.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:40.349

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:45.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:50.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:18:55.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:00.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:05.347

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:10.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:15.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:20.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:25.340

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:30.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:35.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:40.340

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:45.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:50.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:19:55.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:00.353

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:05.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:10.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:15.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:20.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:25.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:30.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:35.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:40.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:45.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:50.340

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:20:55.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:00.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:05.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:10.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:15.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:20.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:25.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:30.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:35.330

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:40.330

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:45.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:50.329

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:21:55.331

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:00.327

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:05.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:10.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:15.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:20.327

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:25.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:30.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:35.330

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:40.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:45.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:50.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:22:55.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:00.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:05.512

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:10.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:15.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:20.330

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:25.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:30.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:35.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:40.327

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:45.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:50.330

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:23:55.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:00.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:05.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:10.329

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:15.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:20.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:25.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:30.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:35.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:40.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:45.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:50.327

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:24:55.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:00.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:05.340

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:10.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:15.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:20.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:25.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:30.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:35.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:40.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:45.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:50.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:25:55.345

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:00.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:05.331

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:10.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:15.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:20.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:25.346

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:30.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:35.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:40.341

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:45.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:50.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:26:55.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:00.331

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:05.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:10.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:15.343

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:20.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:25.340

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:30.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:35.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:40.334

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:45.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:50.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:27:55.329

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:00.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:05.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:10.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:15.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:20.336

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:25.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:30.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:35.331

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:40.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:45.344

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:50.333

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:28:55.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:29:00.335

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:29:05.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:29:10.339

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:29:15.342

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:29:20.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:29:25.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:29:30.340

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/events?fieldSelector=involvedObject.name%3Dkubectl-wayne%2CinvolvedObject.namespace%3Dkubesphere-controls-system%2CinvolvedObject.kind%3DDeployment%2CinvolvedObject.uid%3D396339a3-4078-4c2b-aed3-ee38c5dc0ba3 2022/11/03T15:29:33.937

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T15:44:57.765

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 2022/11/03T15:44:57.767

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 200 13ms 15b 2022/11/03T15:44:57.780

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667459697&end=1667461497&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:44:57.985

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T15:44:59.766

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667459699&end=1667461499&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:44:59.858

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/replicasets?labelSelector=kubesphere.io/username=wayne 2022/11/03T15:45:01.097

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/replicasets?labelSelector=kubesphere.io/username=wayne 2022/11/03T15:45:26.878

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T15:45:27.931

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 2022/11/03T15:45:27.932

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 200 20ms 15b 2022/11/03T15:45:27.953

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667459727&end=1667461527&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:45:28.023

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T15:45:29.937

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667459729&end=1667461529&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:45:30.007

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:45:32.937

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/replicasets?labelSelector=kubesphere.io/username=wayne 2022/11/03T15:45:37.799

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T15:45:41.032

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T15:45:42.298

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=%21kubesphere.io%2Fkubefed-host-namespace%2C%21kubesphere.io%2Fdevopsproject 2022/11/03T15:45:46.461

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/11/03T15:45:46.467

   <-- GET /apis/clusters/host/apps/v1/deployments/t 2022/11/03T15:45:49.863

   --> GET /apis/clusters/host/apps/v1/deployments/t 200 26ms 15b 2022/11/03T15:45:49.889

   <-- GET /apis/clusters/host/apps/v1/deployments/ts 2022/11/03T15:45:51.045

   --> GET /apis/clusters/host/apps/v1/deployments/ts 200 20ms 15b 2022/11/03T15:45:51.065

   <-- GET /apis/clusters/host/apps/v1/namespaces/kube-federation-system/deployments/ts 2022/11/03T15:45:54.199

   --> GET /apis/clusters/host/apps/v1/namespaces/kube-federation-system/deployments/ts 200 22ms 15b 2022/11/03T15:45:54.220

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?limit=-1&sortBy=updateTime&page=1 2022/11/03T15:45:54.259

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/limitranges 2022/11/03T15:45:54.281

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/secrets?fieldSelector=type%3Dkubernetes.io%2Fdockerconfigjson 2022/11/03T15:45:54.282

   <-- POST /dockerhub/api/content/v1/products/search 2022/11/03T15:45:55.557

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/configmaps 2022/11/03T15:45:55.590

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/secrets 2022/11/03T15:45:55.591

   --> POST /dockerhub/api/content/v1/products/search 200 964ms 42.89kb 2022/11/03T15:45:56.521

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/03T15:48:28.299

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/03T15:48:28.303

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/03T15:48:28.555

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T15:48:28.659

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 2022/11/03T15:48:28.662

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 200 21ms 15b 2022/11/03T15:48:28.683

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667459908&end=1667461708&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:48:28.788

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T15:48:30.658

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667459910&end=1667461710&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:48:30.727

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/03T15:48:31.765

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T15:48:31.852

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667459911&end=1667461711&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:48:31.928

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:48:33.654

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T15:48:33.852

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667459913&end=1667461713&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:48:33.919

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T15:48:33.934

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667459913&end=1667461713&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:48:34.013

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:48:38.662

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:48:43.660

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:48:48.663

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:48:53.657

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:48:58.663

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:49:03.675

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:49:08.663

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:49:13.672

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:49:18.661

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:49:23.663

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:49:28.663

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T15:49:33.663

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T15:49:38.013

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T15:49:39.279

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/03T16:19:57.659

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/03T16:19:57.661

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/03T16:19:58.042

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T16:19:58.142

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 2022/11/03T16:19:58.149

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 200 27ms 15b 2022/11/03T16:19:58.176

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667461798&end=1667463598&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:19:58.362

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T16:20:00.145

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667461799&end=1667463599&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:20:00.218

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/replicasets?labelSelector=kubesphere.io/username=wayne 2022/11/03T16:20:00.362

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T16:20:28.546

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T16:20:29.793

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system 2022/11/03T16:20:31.666

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kube-federation-system/members/admin/roles 2022/11/03T16:20:31.668

   <-- GET /apis/clusters/host/apps/v1/namespaces/kube-federation-system/deployments/kubefed-admission-webhook 2022/11/03T16:20:31.906

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:20:32.008

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 2022/11/03T16:20:32.009

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 200 24ms 15b 2022/11/03T16:20:32.033

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667461831&end=1667463631&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:20:32.156

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:20:34.001

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667461833&end=1667463633&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:20:34.068

   <-- GET /apis/clusters/host/apps/v1/namespaces/kube-federation-system/replicasets?labelSelector=kubefed-admission-webhook=true 2022/11/03T16:20:34.317

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 2022/11/03T16:34:01.227

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:34:01.229

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 200 21ms 15b 2022/11/03T16:34:01.248

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667462641&end=1667464441&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:34:01.621

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:34:03.216

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667462643&end=1667464443&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:34:03.317

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 2022/11/03T16:34:04.068

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 2022/11/03T16:34:06.976

   --> GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 200 20ms 14b 2022/11/03T16:34:06.995

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg/log?container=admission-webhook&tailLines=1000&timestamps=true&follow=false 2022/11/03T16:34:07.021

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 2022/11/03T16:34:20.252

   --> GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 200 18ms 14b 2022/11/03T16:34:20.269

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg/log?container=admission-webhook&tailLines=2000&timestamps=true&follow=false 2022/11/03T16:34:20.298

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 2022/11/03T16:34:29.285

   --> GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 200 17ms 14b 2022/11/03T16:34:29.302

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg/log?container=admission-webhook&tailLines=2000&timestamps=true&follow=true 2022/11/03T16:34:29.327

 Error: Http response closed while proxying /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg/log?container=admission-webhook&tailLines=2000&timestamps=true&follow=true

     at ServerResponse.<anonymous> (/opt/kubesphere/console/server/server.js:48638:14)

     at ServerResponse.emit (events.js:326:22)

     at Socket.onServerResponseClose (_http_server.js:209:44)

     at Socket.emit (events.js:326:22)

     at TCP.<anonymous> (net.js:675:12)

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 2022/11/03T16:34:46.172

   --> GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 200 20ms 14b 2022/11/03T16:34:46.192

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg/log?container=admission-webhook&tailLines=2000&timestamps=true&follow=false 2022/11/03T16:34:46.218

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 2022/11/03T16:44:13.084

   <-- GET /apis/clusters/host/apps/v1/namespaces/kube-federation-system/deployments/kubefed-admission-webhook 2022/11/03T16:44:26.721

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:44:27.156

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 2022/11/03T16:44:27.159

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 200 20ms 15b 2022/11/03T16:44:27.179

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463266&end=1667465066&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:44:27.211

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 2022/11/03T16:44:28.904

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:44:29.262

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463269&end=1667465069&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:44:29.327

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg?cluster=host&start=1667435078&end=1667465078&step=600s&times=50&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%7Cpod_net_bytes_transmitted%7Cpod_net_bytes_received%24 2022/11/03T16:44:38.730

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/events?fieldSelector=involvedObject.name%3Dkubefed-admission-webhook-6f9f5dcbbf-4hcpg%2CinvolvedObject.namespace%3Dkube-federation-system%2CinvolvedObject.kind%3DPod%2CinvolvedObject.uid%3D20848dd5-e8e1-4734-8bd5-1a6fa1372f38 2022/11/03T16:44:41.030

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 2022/11/03T16:44:45.521

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-admission-webhook-6f9f5dcbbf-4hcpg 2022/11/03T16:44:52.760

   <-- GET /apis/clusters/host/apps/v1/namespaces/kube-federation-system/deployments/kubefed-admission-webhook 2022/11/03T16:44:53.928

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:44:54.155

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 2022/11/03T16:44:54.157

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 200 17ms 15b 2022/11/03T16:44:54.174

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463293&end=1667465093&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:44:54.213

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:44:56.169

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463295&end=1667465095&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:44:56.237

   <-- GET /apis/clusters/host/apps/v1/namespaces/kube-federation-system/deployments/kubefed-admission-webhook 2022/11/03T16:44:56.831

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:44:56.907

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463296&end=1667465096&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:44:56.977

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:44:58.916

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:44:58.985

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463298&end=1667465098&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:44:58.995

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463298&end=1667465098&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:44:59.064

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:44:59.158

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:04.165

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:09.167

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:14.177

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:19.166

   <-- GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 2022/11/03T16:45:21.091

 UnauthorizedError: Not Login

     at Object.throw (/opt/kubesphere/console/server/server.js:22969:11)

     at getCurrentUser (/opt/kubesphere/console/server/server.js:6957:14)

     at renderView (/opt/kubesphere/console/server/server.js:71947:7)

     at runMicrotasks (<anonymous>)

     at processTicksAndRejections (internal/process/task_queues.js:97:5)

     at async /opt/kubesphere/console/server/server.js:40116:7

     at async logger (/opt/kubesphere/console/server/server.js:37060:7)

     at async /opt/kubesphere/console/server/server.js:31823:26

     at async /opt/kubesphere/console/server/server.js:31823:26

     at async /opt/kubesphere/console/server/server.js:31823:26

   --> GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 302 5ms 261b 2022/11/03T16:45:21.096

   <-- GET /login?referer=/clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 2022/11/03T16:45:21.122

   --> GET /login?referer=/clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 200 5ms 16.91kb 2022/11/03T16:45:21.126

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:24.173

   <-- POST /login 2022/11/03T16:45:24.266

   --> POST /login 302 110ms 231b 2022/11/03T16:45:24.376

   <-- GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 2022/11/03T16:45:24.399

   --> GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 200 96ms 17.8kb 2022/11/03T16:45:24.495

   <-- GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 2022/11/03T16:45:24.519

   --> GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 200 95ms 17.8kb 2022/11/03T16:45:24.614

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/03T16:45:24.819

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/03T16:45:24.821

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/03T16:45:24.935

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system 2022/11/03T16:45:25.019

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kube-federation-system/members/admin/roles 2022/11/03T16:45:25.023

   <-- GET /apis/clusters/host/apps/v1/namespaces/kube-federation-system/deployments/kubefed-admission-webhook 2022/11/03T16:45:25.064

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:45:25.148

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 2022/11/03T16:45:25.150

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 200 14ms 15b 2022/11/03T16:45:25.163

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463324&end=1667465124&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:25.192

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:45:27.132

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463326&end=1667465126&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:27.178

   <-- GET /apis/clusters/host/apps/v1/namespaces/kube-federation-system/deployments/kubefed-admission-webhook 2022/11/03T16:45:28.035

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:45:28.140

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463327&end=1667465127&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:28.212

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:29.168

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:45:30.108

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463329&end=1667465129&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:30.184

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:45:30.221

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463330&end=1667465130&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:30.399

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:34.171

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:35.154

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:39.167

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:40.152

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:44.167

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:45.157

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:49.163

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:51.092

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:54.168

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:55.159

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:45:59.160

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:04.168

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:09.160

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:14.180

   <-- GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 2022/11/03T16:46:15.528

 UnauthorizedError: Not Login

     at Object.throw (/opt/kubesphere/console/server/server.js:22969:11)

     at getCurrentUser (/opt/kubesphere/console/server/server.js:6957:14)

     at renderView (/opt/kubesphere/console/server/server.js:71947:7)

     at runMicrotasks (<anonymous>)

     at processTicksAndRejections (internal/process/task_queues.js:97:5)

     at async /opt/kubesphere/console/server/server.js:40116:7

     at async logger (/opt/kubesphere/console/server/server.js:37060:7)

     at async /opt/kubesphere/console/server/server.js:31823:26

     at async /opt/kubesphere/console/server/server.js:31823:26

     at async /opt/kubesphere/console/server/server.js:31823:26

   --> GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 302 3ms 261b 2022/11/03T16:46:15.531

   <-- GET /login?referer=/clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 2022/11/03T16:46:15.558

   --> GET /login?referer=/clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 200 5ms 16.91kb 2022/11/03T16:46:15.563

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:19.172

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:24.167

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:29.166

   <-- POST /logout 2022/11/03T16:46:30.909

   --> POST /logout 302 6ms 43b 2022/11/03T16:46:30.915

   <-- GET /login 2022/11/03T16:46:30.938

   --> GET /login 200 4ms 16.91kb 2022/11/03T16:46:30.942

   <-- GET /login 2022/11/03T16:46:30.981

   --> GET /login 200 4ms 16.91kb 2022/11/03T16:46:30.985

   <-- POST /login 2022/11/03T16:46:40.767

   --> POST /login 302 109ms 231b 2022/11/03T16:46:40.876

   <-- GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 2022/11/03T16:46:40.910

   --> GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 200 59ms 17.8kb 2022/11/03T16:46:40.968

   <-- GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 2022/11/03T16:46:41.333

   --> GET /clusters/host/projects/kube-federation-system/deployments/kubefed-admission-webhook/resource-status 200 53ms 17.8kb 2022/11/03T16:46:41.386

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/03T16:46:41.667

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/03T16:46:41.669

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/03T16:46:41.830

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system 2022/11/03T16:46:41.903

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kube-federation-system/members/admin/roles 2022/11/03T16:46:41.938

   <-- GET /apis/clusters/host/apps/v1/namespaces/kube-federation-system/deployments/kubefed-admission-webhook 2022/11/03T16:46:41.973

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:46:42.065

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 2022/11/03T16:46:42.066

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kube-federation-system/horizontalpodautoscalers/kubefed-admission-webhook 200 19ms 15b 2022/11/03T16:46:42.085

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463401&end=1667465201&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:42.126

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:46:44.048

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463403&end=1667465203&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:44.105

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:47.075

   <-- GET /apis/clusters/host/apps/v1/namespaces/kube-federation-system/deployments/kubefed-admission-webhook 2022/11/03T16:46:50.161

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:46:50.252

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463410&end=1667465210&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:50.312

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:52.049

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:46:52.251

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463412&end=1667465212&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:52.326

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&sortBy=startTime 2022/11/03T16:46:52.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&start=1667463412&end=1667465212&step=60s&times=30&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:52.418

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:46:57.071

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:02.083

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:07.074

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:12.083

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:17.081

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:22.080

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:27.082

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:32.088

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:37.086

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:42.092

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:47.087

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:52.094

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:47:57.091

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:48:02.093

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:48:07.097

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kube-federation-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubefed-admission-webhook%3Dtrue&resources_filter=kubefed-admission-webhook-6f9f5dcbbf-4hcpg%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:48:12.083

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1667453292&end=1667465292&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/11/03T16:48:12.568

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/03T16:48:14.680

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/03T16:48:14.706

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/03T16:48:14.823

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/11/03T16:48:14.934

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/11/03T16:48:14.937

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/03T16:48:14.939

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/11/03T16:48:14.939

   <-- GET /kapis/clusters/host/version 2022/11/03T16:48:14.941

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/11/03T16:48:15.019

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T16:48:29.256

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T16:48:30.479

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/03T16:48:30.946

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/03T16:48:30.948

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/03T16:48:31.029

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T16:48:31.115

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 2022/11/03T16:48:31.117

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 200 17ms 15b 2022/11/03T16:48:31.134

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667463510&end=1667465310&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:48:31.185

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T16:48:33.106

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667463512&end=1667465312&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:48:33.178

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/03T16:48:33.961

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T16:48:34.041

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667463513&end=1667465313&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:48:34.127

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T16:48:36.056

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667463515&end=1667465315&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:48:36.129

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/03T16:48:36.131

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667463515&end=1667465315&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:48:36.200

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:48:41.134

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T16:48:43.669

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/03T16:48:44.917

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/jobs?sortBy=updateTime&limit=10 2022/11/03T16:48:45.247

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/03T16:48:47.278

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/03T16:48:48.630

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/03T16:48:48.933

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/03T16:48:48.935

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/03T16:48:48.999

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9?cluster=host&start=1667435332&end=1667465332&step=600s&times=50&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%7Cpod_net_bytes_transmitted%7Cpod_net_bytes_received%24 2022/11/03T16:48:52.378

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/events?fieldSelector=involvedObject.name%3Dkubectl-wayne-758fcc6996-cpjx9%2CinvolvedObject.namespace%3Dkubesphere-controls-system%2CinvolvedObject.kind%3DPod%2CinvolvedObject.uid%3D35a8c433-ea02-4f59-b2ad-ff35960e74b7 2022/11/03T16:48:53.545

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/03T16:48:55.957

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/03T16:49:16.639

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/03T16:49:18.015

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/03T16:49:20.567

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/03T16:49:21.696

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-monitoring-system/members/admin/roles 2022/11/03T16:49:30.223

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system 2022/11/03T16:49:30.224

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/endpoints/prometheus-operated 2022/11/03T16:49:30.295

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/services/prometheus-operated 2022/11/03T16:49:30.296

   <-- GET /apis/clusters/host/monitoring.coreos.com/v1/namespaces/kubesphere-monitoring-system/servicemonitors?labelSelector=operated-prometheus%3Dtrue 2022/11/03T16:49:30.394

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/deployments?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/03T16:49:30.396

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/11/03T16:49:30.397

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/statefulsets?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/03T16:49:30.418

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/daemonsets?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/03T16:49:30.419

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1667463570&end=1667465370&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:49:30.541

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/11/03T16:49:32.378

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1667463572&end=1667465372&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:49:32.475

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/services/prometheus-operated 2022/11/03T16:49:34.855

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/11/03T16:49:34.944

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1667463574&end=1667465374&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:49:35.050

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:49:35.410

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/11/03T16:49:36.954

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1667463576&end=1667465376&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:49:37.048

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/11/03T16:49:37.053

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1667463576&end=1667465376&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:49:37.146

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:49:40.411

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:49:45.420

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:49:50.417

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:49:55.420

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:50:00.416

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:50:05.415

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:50:10.415

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:50:15.425

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/events?fieldSelector=involvedObject.name%3Dprometheus-operated%2CinvolvedObject.namespace%3Dkubesphere-monitoring-system%2CinvolvedObject.kind%3DService%2CinvolvedObject.uid%3D7ae72db5-da4f-49f0-ac1a-6a2cd1be6078 2022/11/03T16:50:17.333

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/deployments?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/03T16:50:18.262

   <-- GET /apis/clusters/host/monitoring.coreos.com/v1/namespaces/kubesphere-monitoring-system/servicemonitors?labelSelector=operated-prometheus%3Dtrue 2022/11/03T16:50:18.263

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/statefulsets?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/03T16:50:18.264

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/daemonsets?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/03T16:50:18.266

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/11/03T16:50:18.267

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1667463618&end=1667465418&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:50:18.410

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/11/03T16:50:20.275

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1667463620&end=1667465420&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:50:20.381

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/secrets 2022/11/03T16:50:22.955

   <-- GET /apis/clusters/host/monitoring.coreos.com/v1/namespaces/kubesphere-monitoring-system/servicemonitors?labelSelector=operated-prometheus%3Dtrue 2022/11/03T16:50:22.958

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/03T16:50:23.268

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/03T16:50:25.847

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/03T16:50:26.982

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/ingresses?sortBy=createTime&limit=10 2022/11/03T16:50:27.294

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/11/03T16:50:28.903

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=%21kubesphere.io%2Fkubefed-host-namespace%2C%21kubesphere.io%2Fdevopsproject 2022/11/03T16:50:28.904

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/11/03T16:50:34.201

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/11/03T16:50:37.102

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/11/03T16:50:37.179

   <-- POST /login 2022/11/03T16:53:58.943

   --> POST /login 302 108ms 33b 2022/11/03T16:53:59.051

   <-- GET / 2022/11/03T16:53:59.081

   --> GET / 200 72ms 17.8kb 2022/11/03T16:53:59.153

   <-- GET / 2022/11/03T16:53:59.195

   --> GET / 200 50ms 17.8kb 2022/11/03T16:53:59.246

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1667453639&end=1667465639&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/11/03T16:53:59.678

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/11/03T16:54:02.783

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/11/03T16:54:02.807

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/03T16:54:04.301

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/03T16:54:04.302

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/03T16:54:04.422

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/11/03T16:54:04.558

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/03T16:54:04.563

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/11/03T16:54:04.565

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/11/03T16:54:04.566

   <-- GET /kapis/clusters/host/version 2022/11/03T16:54:04.567

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/11/03T16:54:04.638

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/11/03T16:54:05.944

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/11/03T17:03:14.753

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/11/03T17:03:14.909

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/11/03T17:03:56.621

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/11/03T17:04:50.392

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/11/03T17:04:50.539

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/11/04T10:10:09.374

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/04T10:10:12.371

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components/tower 2022/11/04T10:10:14.512

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/services/tower 2022/11/04T10:10:14.963

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dtower&sortBy=startTime 2022/11/04T10:10:15.380

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dtower&start=1667526015&end=1667527815&step=60s&times=30&resources_filter=tower-786bb99f5d-zjbtc%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T10:10:15.456

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dtower&sortBy=startTime 2022/11/04T10:10:17.389

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dtower&start=1667526017&end=1667527817&step=60s&times=30&resources_filter=tower-786bb99f5d-zjbtc%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T10:10:17.474

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dtower&resources_filter=tower-786bb99f5d-zjbtc%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T10:10:20.384

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dtower&resources_filter=tower-786bb99f5d-zjbtc%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T10:10:25.389

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system 2022/11/04T10:10:26.279

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/11/04T10:10:26.281

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/tower-786bb99f5d-zjbtc 2022/11/04T10:10:26.642

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods/tower-786bb99f5d-zjbtc/containers/tower?cluster=host&namespace=kubesphere-system&container=tower&podName=tower-786bb99f5d-zjbtc&start=1667497829&end=1667527829&step=600s&times=50&metrics_filter=container_cpu_usage%7Ccontainer_memory_usage_wo_cache%24 2022/11/04T10:10:29.567

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/tower-786bb99f5d-zjbtc 2022/11/04T10:10:35.642

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components/tower 2022/11/04T10:10:38.014

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/services/tower 2022/11/04T10:10:38.374

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dtower&sortBy=startTime 2022/11/04T10:10:38.447

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dtower&start=1667526038&end=1667527838&step=60s&times=30&resources_filter=tower-786bb99f5d-zjbtc%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T10:10:38.518

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dtower&sortBy=startTime 2022/11/04T10:10:40.460

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dtower&start=1667526040&end=1667527840&step=60s&times=30&resources_filter=tower-786bb99f5d-zjbtc%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T10:10:40.542

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/04T10:10:41.382

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/11/04T10:30:59.485

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/11/04T10:31:02.680

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/11/04T10:31:03.061

   <-- GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 2022/11/04T12:49:39.728

   --> GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 200 53ms 17.8kb 2022/11/04T12:49:39.781

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/04T12:49:42.149

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/04T12:49:42.150

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/04T12:49:42.271

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/11/04T12:49:42.343

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/11/04T12:49:42.401

   <-- GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 2022/11/04T16:55:53.857

   --> GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 200 73ms 17.8kb 2022/11/04T16:55:53.930

   <-- GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 2022/11/04T16:55:55.408

   --> GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 200 50ms 17.8kb 2022/11/04T16:55:55.458

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/04T16:55:57.342

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/04T16:55:57.346

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/04T16:55:57.422

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/11/04T16:55:57.493

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/11/04T16:55:57.567

   <-- GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 2022/11/04T17:01:29.070

   --> GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 200 57ms 17.8kb 2022/11/04T17:01:29.127

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/04T17:01:31.030

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/04T17:01:31.037

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/04T17:01:31.283

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/11/04T17:01:31.338

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/11/04T17:01:31.389

   <-- GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 2022/11/04T17:34:15.932

   --> GET /clusters/host/customresources/federatedworkspaceroles.types.kubefed.io/resources 200 61ms 17.8kb 2022/11/04T17:34:15.993

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/04T17:34:17.874

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/04T17:34:17.875

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/04T17:34:18.048

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/11/04T17:34:18.108

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/11/04T17:34:18.164

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/11/04T17:57:03.290

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/04T17:57:07.986

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/04T17:57:09.192

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/04T17:57:10.118

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/04T17:57:10.119

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/04T17:57:10.215

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/04T17:57:10.310

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 2022/11/04T17:57:10.315

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 200 17ms 15b 2022/11/04T17:57:10.332

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667554030&end=1667555830&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T17:57:10.378

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/04T17:57:12.303

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667554032&end=1667555832&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T17:57:12.376

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/04T17:57:14.431

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/04T17:57:17.633

   --> GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 200 28ms 14b 2022/11/04T17:57:17.661

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/log?container=kubectl&tailLines=1000&timestamps=true&follow=false 2022/11/04T17:57:17.687

   <-- GET /terminal/cluster/host/projects/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/containers/kubectl 2022/11/04T17:57:21.919

   --> GET /terminal/cluster/host/projects/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/containers/kubectl 200 33ms 4.03kb 2022/11/04T17:57:21.952

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/04T17:57:22.483

   <-- GET /kapis/clusters/host/terminal.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/exec?container=kubectl&shell=sh 2022/11/04T17:57:22.626

   <-- GET /kapis/clusters/host/terminal.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/exec?container=kubectl&shell=sh 2022/11/04T17:57:32.429

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/04T17:57:57.335

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/04T17:57:57.430

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 2022/11/04T17:57:57.432

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 200 14ms 15b 2022/11/04T17:57:57.446

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667554077&end=1667555877&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T17:57:57.473

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/04T17:57:59.419

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667554079&end=1667555879&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T17:57:59.494

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/04T17:57:59.614

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/04T17:58:00.849

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/04T17:58:02.146

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/04T17:58:03.515

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/04T17:58:06.359

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/04T17:58:06.360

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/04T17:58:06.433

   <-- GET /terminal/cluster/host/projects/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/containers/kubectl 2022/11/04T17:58:08.700

   --> GET /terminal/cluster/host/projects/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/containers/kubectl 200 35ms 4.03kb 2022/11/04T17:58:08.735

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/04T17:58:08.901

   <-- GET /kapis/clusters/host/terminal.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/exec?container=kubectl&shell=sh 2022/11/04T17:58:08.992

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/04T17:58:16.527

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/04T17:58:17.890

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/04T17:58:18.892

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/04T17:58:19.918

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/04T17:58:20.023

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/04T17:58:21.308

   <-- GET /apis/cluster.kubesphere.io/v1alpha1/clusters 2022/11/04T17:58:24.683

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/users/admin/kubectl 2022/11/04T17:58:24.775

   <-- GET /kapis/clusters/host/terminal.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/pods/kubectl-admin-6dbcb94855-7m7kw/exec?container=kubectl&shell=bash 2022/11/04T17:58:24.834

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/users/admin/kubectl 2022/11/04T17:58:49.465

   <-- GET /kapis/clusters/member1/terminal.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/pods/kubectl-admin-6dbcb94855-tbqlb/exec?container=kubectl&shell=bash 2022/11/04T17:58:49.640

   <-- GET /kapis/resources.kubesphere.io/v1alpha2/users/admin/kubeconfig 2022/11/04T17:59:10.491

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system 2022/11/04T17:59:23.009

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kube-federation-system/members/admin/roles 2022/11/04T17:59:23.011

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl 2022/11/04T17:59:23.076

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl 2022/11/04T17:59:24.950

   <-- GET /terminal/cluster/host/projects/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl/containers/controller-manager 2022/11/04T18:00:00.492

   --> GET /terminal/cluster/host/projects/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl/containers/controller-manager 200 53ms 4.03kb 2022/11/04T18:00:00.545

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl 2022/11/04T18:00:00.783

   <-- GET /kapis/clusters/host/terminal.kubesphere.io/v1alpha2/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl/exec?container=controller-manager&shell=sh 2022/11/04T18:00:00.891

   <-- GET /kapis/clusters/host/terminal.kubesphere.io/v1alpha2/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl/exec?container=controller-manager&shell=sh 2022/11/04T18:00:05.468

   <-- GET /terminal/cluster/host/projects/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl/containers/controller-manager 2022/11/04T18:00:32.280

   --> GET /terminal/cluster/host/projects/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl/containers/controller-manager 200 30ms 4.03kb 2022/11/04T18:00:32.310

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl 2022/11/04T18:00:32.551

   <-- GET /kapis/clusters/host/terminal.kubesphere.io/v1alpha2/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl/exec?container=controller-manager&shell=sh 2022/11/04T18:00:32.666

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/04T18:00:55.660

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/04T18:00:57.025

   <-- GET /apis/clusters/host/monitoring.coreos.com/v1/namespaces/kubesphere-monitoring-system/servicemonitors/etcd 2022/11/04T18:01:04.500

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/componenthealth 2022/11/04T18:01:04.502

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?start=1667526064&end=1667556064&step=300s&times=100&metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_cpu_utilisation%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_memory_utilisation%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_disk_size_utilisation%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/11/04T18:01:04.504

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?start=1667526064&end=1667556064&step=300s&times=100&metrics_filter=apiserver_request_latencies%7Capiserver_request_by_verb_latencies%7Capiserver_request_rate%24 2022/11/04T18:01:04.506

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?start=1667526064&end=1667556064&step=300s&times=100&metrics_filter=scheduler_schedule_attempts%7Cscheduler_schedule_attempt_rate%24 2022/11/04T18:01:04.740

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/componenthealth 2022/11/04T18:01:06.479

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/componenthealth 2022/11/04T18:01:08.593

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/componenthealth 2022/11/04T18:01:10.648

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/componenthealth 2022/11/04T18:01:12.718

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?start=1667550073&end=1667556073&step=120s&times=50&metrics_filter=cluster_cpu_utilisation%7Ccluster_memory_utilisation%7Ccluster_load1%7Ccluster_load5%7Ccluster_load15%7Ccluster_disk_size_usage%7Ccluster_disk_inode_utilisation%7Ccluster_disk_inode_usage%7Ccluster_disk_inode_total%7Ccluster_disk_read_iops%7Ccluster_disk_write_iops%7Ccluster_disk_read_throughput%7Ccluster_disk_write_throughput%7Ccluster_net_bytes_transmitted%7Ccluster_net_bytes_received%7Ccluster_pod_running_count%7Ccluster_pod_abnormal_count%7Ccluster_pod_succeeded_count%24 2022/11/04T18:01:13.546

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?start=1667550074&end=1667556074&step=120s&times=50&metrics_filter=apiserver_request_latencies%7Capiserver_request_by_verb_latencies%7Capiserver_request_rate%24 2022/11/04T18:01:14.949

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?start=1667550076&end=1667556076&step=120s&times=50&metrics_filter=scheduler_schedule_attempts%7Cscheduler_schedule_attempt_rate%7Cscheduler_e2e_scheduling_latency%7Cscheduler_e2e_scheduling_latency_quantile%24 2022/11/04T18:01:16.859

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=10&sort_type=desc&sort_metric=node_cpu_utilisation 2022/11/04T18:01:19.001

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/11/04T18:01:22.431

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667552482&end=1667556082&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/11/04T18:01:22.533

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/11/04T18:01:29.918

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1667554289&end=1667556089&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%7Cnotification-manager-deployment-78664576cb-qkhz2%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T18:01:30.074

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667526092&end=1667556092&step=600s&times=50&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_load1%7Cnode_load5%7Cnode_load15%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_disk_inode_utilisation%7Cnode_device_size_utilisation%7Cnode_disk_inode_usage%7Cnode_disk_inode_total%7Cnode_disk_read_iops%7Cnode_disk_write_iops%7Cnode_disk_read_throughput%7Cnode_disk_write_throughput%7Cnode_net_bytes_transmitted%7Cnode_net_bytes_received%24 2022/11/04T18:01:32.306

   <-- GET /api/clusters/host/v1/events?fieldSelector=involvedObject.name%3Di-n0vhwq18%2CinvolvedObject.kind%3DNode 2022/11/04T18:01:33.568

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/11/04T18:01:35.261

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1667554295&end=1667556095&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%7Cnotification-manager-deployment-78664576cb-qkhz2%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T18:01:35.413

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/04T18:01:36.366

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/04T18:01:36.367

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/04T18:01:36.474

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/04T18:01:39.621

   --> GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 200 16ms 14b 2022/11/04T18:01:39.637

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/log?container=kubectl&tailLines=1000&timestamps=true&follow=false 2022/11/04T18:01:39.665

   <-- GET /terminal/cluster/host/projects/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/containers/kubectl 2022/11/04T18:01:43.942

   --> GET /terminal/cluster/host/projects/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/containers/kubectl 200 48ms 4.03kb 2022/11/04T18:01:43.990

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/04T18:01:44.192

   <-- GET /kapis/clusters/host/terminal.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/exec?container=kubectl&shell=sh 2022/11/04T18:01:44.284

   <-- GET /terminal/cluster/host/projects/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/containers/kubectl 2022/11/04T18:01:58.221

   --> GET /terminal/cluster/host/projects/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/containers/kubectl 200 32ms 4.03kb 2022/11/04T18:01:58.253

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9 2022/11/04T18:01:58.891

   <-- GET /kapis/clusters/host/terminal.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/pods/kubectl-wayne-758fcc6996-cpjx9/exec?container=kubectl&shell=sh 2022/11/04T18:01:59.011

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?page=1&limit=-1&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/11/04T18:02:37.137

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?page=1&limit=-1&labelSelector=cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/11/04T18:02:37.162

   <-- GET /kapis/clusters/host/tenant.kubesphere.io/v1alpha2/metering/price 2022/11/04T18:02:37.219

   <-- GET /kapis/tenant.kubesphere.io/v1alpha2/metering/price 2022/11/04T18:02:37.223

   <-- GET /kapis/clusters/member1/tenant.kubesphere.io/v1alpha2/metering/price 2022/11/04T18:02:37.225

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&page=1&sortBy=createTime 2022/11/04T18:02:37.349

   <-- GET /kapis/clusters/host/metering.kubesphere.io/v1alpha1/workspaces/system-workspace?start=1666886400&end=1667491200&step=3600s&metrics_filter=meter_workspace_cpu_usage%7Cmeter_workspace_memory_usage%7Cmeter_workspace_net_bytes_transmitted%7Cmeter_workspace_net_bytes_received%7Cmeter_workspace_pvc_bytes_total&resources_filter=system-workspace 2022/11/04T18:02:37.445

   <-- GET /kapis/clusters/host/metering.kubesphere.io/v1alpha1/workspaces/system-workspace?start=1666886400&end=1667556157&step=3600s&metrics_filter=meter_workspace_cpu_usage%7Cmeter_workspace_memory_usage%7Cmeter_workspace_net_bytes_transmitted%7Cmeter_workspace_net_bytes_received%7Cmeter_workspace_pvc_bytes_total&resources_filter=system-workspace 2022/11/04T18:02:37.758

   <-- GET /kapis/clusters/host/tenant.kubesphere.io/v1alpha2/workspaces/system-workspace/namespaces?page=1&limit=-1&labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime 2022/11/04T18:02:38.040

   <-- GET /kapis/clusters/host/tenant.kubesphere.io/v1alpha2/metering?metrics_filter=meter_namespace_cpu_usage&resources_filter=kube-federation-system%7Ckubesphere-monitoring-federated%7Ckubesphere-controls-system%7Ckubesphere-system%7Ckubesphere-monitoring-system%7Cdefault%7Ckube-system%7Ckube-public%7Ckube-node-lease&level=LevelNamespace 2022/11/04T18:02:38.142

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/11/04T18:05:51.871

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/11/04T18:05:51.987

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1667554552&end=1667556352&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%7Cnotification-manager-deployment-78664576cb-qkhz2%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T18:05:52.129

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/04T18:05:53.718

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/04T18:05:53.729

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/04T18:05:53.820

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/04T18:05:58.167

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/11/04T18:05:58.170

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/11/04T18:05:58.171

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/11/04T18:05:58.177

   <-- GET /kapis/clusters/host/version 2022/11/04T18:05:58.179

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/11/04T18:05:58.259

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/04T18:07:08.229

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/04T18:07:08.231

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/04T18:07:08.326

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/users/admin/kubectl 2022/11/04T18:07:26.404

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/11/04T18:07:49.649

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667552869&end=1667556469&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/11/04T18:07:49.748

 Error: read ECONNRESET

     at TCP.onStreamRead (internal/stream_base_commons.js:209:20) {

   errno: 'ECONNRESET',

   code: 'ECONNRESET',

   syscall: 'read'

 }

 NOT exit...

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/11/04T18:08:53.329

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1667554733&end=1667556533&step=60s&times=30&resources_filter=i-n0vhwq18-shell-access%7Ckubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T18:08:53.486

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667526537&end=1667556537&step=600s&times=50&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_load1%7Cnode_load5%7Cnode_load15%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_disk_inode_utilisation%7Cnode_device_size_utilisation%7Cnode_disk_inode_usage%7Cnode_disk_inode_total%7Cnode_disk_read_iops%7Cnode_disk_write_iops%7Cnode_disk_read_throughput%7Cnode_disk_write_throughput%7Cnode_net_bytes_transmitted%7Cnode_net_bytes_received%24 2022/11/04T18:08:57.910

   <-- GET /api/clusters/host/v1/events?fieldSelector=involvedObject.name%3Di-n0vhwq18%2CinvolvedObject.kind%3DNode 2022/11/04T18:08:58.958

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667526539&end=1667556539&step=600s&times=50&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_load1%7Cnode_load5%7Cnode_load15%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_disk_inode_utilisation%7Cnode_device_size_utilisation%7Cnode_disk_inode_usage%7Cnode_disk_inode_total%7Cnode_disk_read_iops%7Cnode_disk_write_iops%7Cnode_disk_read_throughput%7Cnode_disk_write_throughput%7Cnode_net_bytes_transmitted%7Cnode_net_bytes_received%24 2022/11/04T18:09:00.028

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667552974&end=1667556574&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/11/04T18:09:35.084

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/04T18:09:37.577

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/04T18:09:37.579

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/04T18:09:37.710

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/11/04T18:09:40.944

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/04T18:09:41.033

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/11/04T18:09:42.059

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/04T18:09:42.136

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%3Dsystem-workspace 2022/11/04T18:09:43.849

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kube-federation-system%7Ckubesphere-monitoring-federated%7Ckubesphere-controls-system%7Ckubesphere-system%7Ckubesphere-monitoring-system%7Cdefault%7Ckube-system%7Ckube-public%7Ckube-node-lease%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/04T18:09:43.944

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/11/04T18:09:45.326

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/04T18:09:45.425

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/11/04T18:09:53.665

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/workspaces/system-workspace/workspacemembers?sortBy=createTime&limit=10 2022/11/04T18:10:05.447

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/11/04T18:10:13.039

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/workspaces/system-workspace/workspacemembers?sortBy=createTime&limit=10 2022/11/04T18:10:15.329

   <-- GET /api/clusters/host/v1/namespaces/kubekey-system 2022/11/04T18:10:30.323

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubekey-system/members/admin/roles 2022/11/04T18:10:30.325

   <-- GET /api/clusters/host/v1/namespaces/kubekey-system 2022/11/04T18:10:30.396

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/namespaces/kubekey-system/quotas 2022/11/04T18:10:30.398

   <-- GET /api/clusters/host/v1/namespaces/kubekey-system/limitranges 2022/11/04T18:10:30.399

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubekey-system?namespace=kubekey-system&start=1667513430&end=1667556630&step=4320s&times=10&metrics_filter=namespace_pod_count%7Cnamespace_deployment_count%7Cnamespace_statefulset_count%7Cnamespace_daemonset_count%7Cnamespace_job_count%7Cnamespace_cronjob_count%7Cnamespace_pvc_count%7Cnamespace_service_count%7Cnamespace_secret_count%7Cnamespace_configmap_count%7Cnamespace_ingresses_extensions_count%24 2022/11/04T18:10:30.486

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/namespaces/kubekey-system/quotas 2022/11/04T18:10:30.490

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/namespaces/kubekey-system/abnormalworkloads 2022/11/04T18:10:30.494

   <-- GET /kapis/clusters/host/gateway.kubesphere.io/v1alpha1/namespaces/kubekey-system/gateways/ 2022/11/04T18:10:35.494

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubekey-system/pods?limit=6&sortBy=startTime 2022/11/04T18:10:36.428

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/11/04T18:10:41.278

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/04T18:10:41.397

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=kubesphere.io%2Fworkspace%21%3Dsystem-workspace%2C%21kubesphere.io%2Fdevopsproject 2022/11/04T18:10:42.413

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces?resources_filter=kubekey-system%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/04T18:10:42.481

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/secrets?sortBy=createTime&limit=10 2022/11/04T18:10:48.934

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/secrets?sortBy=createTime&limit=10 2022/11/04T18:10:50.768

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system 2022/11/04T18:11:03.713

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kube-federation-system/members/admin/roles 2022/11/04T18:11:03.714

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/secrets/member1-secret 2022/11/04T18:11:03.780

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/secrets/member1-secret 2022/11/04T18:11:08.979

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/secrets?sortBy=createTime&limit=10 2022/11/04T18:11:47.200

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/configmaps?sortBy=createTime&limit=10 2022/11/04T18:11:48.985

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/secrets?sortBy=createTime&limit=10 2022/11/04T18:11:49.079

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/configmaps?sortBy=createTime&limit=10 2022/11/04T18:11:50.448

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=%21kubesphere.io%2Fkubefed-host-namespace%2C%21kubesphere.io%2Fdevopsproject 2022/11/04T18:12:02.485

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/11/04T18:12:02.488

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system 2022/11/04T18:12:06.444

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kube-federation-system/members/admin/roles 2022/11/04T18:12:06.446

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/configmaps/kubefed-controller-manager 2022/11/04T18:12:06.581

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/configmaps?sortBy=createTime&limit=10 2022/11/04T18:12:09.278

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/configmaps?sortBy=createTime&limit=10 2022/11/04T18:12:10.669

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/serviceaccounts?sortBy=createTime&limit=10 2022/11/04T18:12:46.543

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/serviceaccounts?sortBy=createTime&limit=10 2022/11/04T18:12:47.744

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/serviceaccounts/host-kubesphere 2022/11/04T18:12:52.009

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kube-federation-system/roles?limit=-1&sortBy=createTime&page=1&annotation=kubesphere.io%2Fcreator 2022/11/04T18:13:05.215

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=%21kubesphere.io%2Fkubefed-host-namespace%2C%21kubesphere.io%2Fdevopsproject 2022/11/04T18:13:28.501

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=%21kubesphere.io%2Fkubefed-host-namespace%2C%21kubesphere.io%2Fdevopsproject 2022/11/04T18:13:30.862

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=%21kubesphere.io%2Fkubefed-host-namespace%2C%21kubesphere.io%2Fdevopsproject 2022/11/04T18:13:35.495

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?sortBy=createTime&limit=10&labelSelector=%21kubesphere.io%2Fkubefed-host-namespace%2C%21kubesphere.io%2Fdevopsproject 2022/11/04T18:13:38.123

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system 2022/11/04T18:13:57.646

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kube-federation-system/members/admin/roles 2022/11/04T18:13:57.652

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/serviceaccounts/kubefed-controller 2022/11/04T18:13:57.797

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/secrets/kubefed-controller-token-vk6l9 2022/11/04T18:13:57.883

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/serviceaccounts?sortBy=createTime&limit=10 2022/11/04T18:14:47.040

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/serviceaccounts?sortBy=createTime&limit=10 2022/11/04T18:14:48.211

   <-- GET /apis/cluster.kubesphere.io/v1alpha1/clusters 2022/11/04T20:45:54.206

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/users/admin/kubectl 2022/11/04T20:45:54.335

   <-- GET /kapis/clusters/host/terminal.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/pods/kubectl-admin-6dbcb94855-7m7kw/exec?container=kubectl&shell=bash 2022/11/04T20:45:54.399

 NOT exit...

 TypeError: Cannot read property 'match' of undefined

     at ProxyServer.<anonymous> (/opt/kubesphere/console/server/server.js:38312:41)

     at ProxyServer.emit (/opt/kubesphere/console/server/server.js:38798:27)

     at Array.stream (/opt/kubesphere/console/server/server.js:40032:26)

     at ProxyServer.<anonymous> (/opt/kubesphere/console/server/server.js:38477:21)

     at Server.<anonymous> (/opt/kubesphere/console/server/server.js:38309:13)

     at Server.emit (events.js:314:20)

     at onParserExecuteCommon (_http_server.js:641:14)

     at onParserExecute (_http_server.js:575:3)

 TypeError: Cannot read property 'match' of undefined

     at ProxyServer.<anonymous> (/opt/kubesphere/console/server/server.js:38312:41)

     at ProxyServer.emit (/opt/kubesphere/console/server/server.js:38798:27)

     at Array.stream (/opt/kubesphere/console/server/server.js:40032:26)

     at ProxyServer.<anonymous> (/opt/kubesphere/console/server/server.js:38477:21)

     at Server.<anonymous> (/opt/kubesphere/console/server/server.js:38309:13)

     at Server.emit (events.js:314:20)

     at onParserExecuteCommon (_http_server.js:641:14)

     at onParserExecute (_http_server.js:575:3)

 NOT exit...

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/04T20:51:35.561

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/04T20:51:36.557

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/04T20:51:36.558

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/04T20:51:36.743

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/04T20:51:36.799

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/04T20:51:36.836

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 2022/11/04T20:51:36.837

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 200 20ms 15b 2022/11/04T20:51:36.857

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667564496&end=1667566296&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T20:51:36.953

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/replicasets?labelSelector=kubesphere.io/username=wayne 2022/11/04T20:51:38.347

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/04T20:51:38.849

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667564498&end=1667566298&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T20:51:38.939

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/04T20:52:48.298

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/04T20:52:49.658

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/11/04T20:52:53.766

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system 2022/11/04T20:52:53.767

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/deployments/ks-apiserver 2022/11/04T20:52:53.891

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/11/04T20:52:53.994

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-apiserver 2022/11/04T20:52:53.996

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-apiserver 200 36ms 15b 2022/11/04T20:52:54.032

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1667564574&end=1667566374&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T20:52:54.144

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/replicasets?labelSelector=app=ks-apiserver,tier=backend 2022/11/04T20:52:55.453

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/11/04T20:52:55.993

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1667564575&end=1667566375&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T20:52:56.072

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/04T20:53:06.790

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/04T20:53:08.035

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?page=2&sortBy=updateTime&limit=10 2022/11/04T20:53:11.176

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system 2022/11/04T20:53:15.983

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/11/04T20:53:15.985

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/deployments/ks-console 2022/11/04T20:53:16.063

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&sortBy=startTime 2022/11/04T20:53:16.554

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-console 2022/11/04T20:53:16.559

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-system/horizontalpodautoscalers/ks-console 200 15ms 15b 2022/11/04T20:53:16.574

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&start=1667564596&end=1667566396&step=60s&times=30&resources_filter=ks-console-54bd5bcbc6-mllfz%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T20:53:17.007

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/replicasets?labelSelector=app=ks-console,tier=frontend 2022/11/04T20:53:18.077

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&sortBy=startTime 2022/11/04T20:53:18.602

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=app%3Dks-console%2Ctier%3Dfrontend&start=1667564598&end=1667566398&step=60s&times=30&resources_filter=ks-console-54bd5bcbc6-mllfz%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/04T20:53:18.664

   <-- GET /clusters/host/projects/kubesphere-system/deployments/ks-console/revision-control 2022/11/04T21:37:24.314

   --> GET /clusters/host/projects/kubesphere-system/deployments/ks-console/revision-control 200 52ms 17.8kb 2022/11/04T21:37:24.366

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/04T21:37:25.802

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/04T21:37:25.805

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/04T21:37:25.907

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system 2022/11/04T21:37:25.999

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/11/04T21:37:26.000

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/deployments/ks-console 2022/11/04T21:37:26.067

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-system/replicasets?labelSelector=app=ks-console,tier=frontend 2022/11/04T21:37:26.144

   <-- GET /clusters/host/projects/kubesphere-system/deployments/ks-console/revision-control 2022/11/04T21:40:35.065

   --> GET /clusters/host/projects/kubesphere-system/deployments/ks-console/revision-control 200 51ms 17.8kb 2022/11/04T21:40:35.116

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/workloads/deployment/ks-console/pods?sort_metric=pod_cpu_usage&limit=5&page=1 2022/11/05T00:05:01.784

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/workloads/deployment/ks-console/pods?cluster=host&start=1667547901&end=1667577901&step=600s&times=50&resources_filter=ks-console-54bd5bcbc6-mllfz%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%7Cpod_net_bytes_transmitted%7Cpod_net_bytes_received%24 2022/11/05T00:05:02.251

   <-- GET /kapis/monitoring.kubesphere.io/v1alpha3/kubesphere?start=1667565939&end=1667577939&step=600s&times=20&metrics_filter=kubesphere_cluser_count%7Ckubesphere_workspace_count%7Ckubesphere_user_count%7Ckubesphere_app_template_count%24 2022/11/05T00:05:40.090

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/11/05T21:28:15.619

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/11/05T21:28:15.620

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/05T21:28:17.916

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/05T21:28:17.919

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/05T21:28:18.358

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/05T21:28:18.475

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/11/05T21:28:18.477

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/11/05T21:28:18.478

   <-- GET /kapis/clusters/host/version 2022/11/05T21:28:18.496

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/11/05T21:28:18.497

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/11/05T21:28:18.581

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/05T21:28:31.545

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/11/05T21:28:32.537

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/05T21:28:32.539

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/11/05T21:28:32.540

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/11/05T21:28:32.546

   <-- GET /kapis/clusters/host/version 2022/11/05T21:28:32.547

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/11/05T21:28:33.042

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:29:24.802

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:29:26.026

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/05T21:29:26.745

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/05T21:29:26.779

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-wayne 2022/11/05T21:29:27.288

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/05T21:29:27.553

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 2022/11/05T21:29:27.555

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-wayne 200 42ms 15b 2022/11/05T21:29:27.597

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667653167&end=1667654967&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:29:27.703

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&sortBy=startTime 2022/11/05T21:29:29.398

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&start=1667653169&end=1667654969&step=60s&times=30&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:29:29.653

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dwayne&resources_filter=kubectl-wayne-758fcc6996-cpjx9%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:29:32.409

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:29:34.599

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:29:36.026

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/05T21:29:41.983

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/05T21:29:43.355

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system 2022/11/05T21:29:43.697

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-monitoring-system/members/admin/roles 2022/11/05T21:29:43.698

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/services/prometheus-operated 2022/11/05T21:29:43.999

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/endpoints/prometheus-operated 2022/11/05T21:29:44.000

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/deployments?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/05T21:29:44.103

   <-- GET /apis/clusters/host/monitoring.coreos.com/v1/namespaces/kubesphere-monitoring-system/servicemonitors?labelSelector=operated-prometheus%3Dtrue 2022/11/05T21:29:44.104

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/statefulsets?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/05T21:29:44.110

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/daemonsets?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/05T21:29:44.111

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/11/05T21:29:44.111

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1667653184&end=1667654984&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:29:44.420

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/11/05T21:29:46.080

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1667653186&end=1667654986&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:29:46.207

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/deployments?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/05T21:29:47.537

   <-- GET /apis/clusters/host/monitoring.coreos.com/v1/namespaces/kubesphere-monitoring-system/servicemonitors?labelSelector=operated-prometheus%3Dtrue 2022/11/05T21:29:47.538

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/statefulsets?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/05T21:29:47.540

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-monitoring-system/daemonsets?labelSelector=app.kubernetes.io%2Fname%3Dprometheus 2022/11/05T21:29:47.541

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/11/05T21:29:47.547

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1667653187&end=1667654987&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:29:47.890

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?limit=10&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&sortBy=startTime 2022/11/05T21:29:49.622

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&start=1667653189&end=1667654989&step=60s&times=30&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:29:49.731

   <-- GET /apis/clusters/host/monitoring.coreos.com/v1/namespaces/kubesphere-monitoring-system/servicemonitors?labelSelector=operated-prometheus%3Dtrue 2022/11/05T21:29:50.310

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-monitoring-system/secrets 2022/11/05T21:29:50.311

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:29:52.913

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-monitoring-system/pods?cluster=host&labelSelector=app.kubernetes.io%2Fname%3Dprometheus&resources_filter=prometheus-k8s-0%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:29:57.532

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/05T21:29:59.425

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/services?sortBy=createTime&limit=10 2022/11/05T21:30:00.581

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/05T21:30:08.135

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/05T21:30:10.228

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/05T21:30:11.619

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/05T21:30:11.620

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/i-n0vhwq18-shell-access 2022/11/05T21:30:12.142

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/05T21:30:17.534

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/05T21:30:19.028

   <-- GET /api/clusters/host/v1/namespaces/kube-federation-system/pods/kubefed-controller-manager-76888f8c88-xmksl 2022/11/05T21:31:46.604

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:32:04.401

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:32:05.643

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:32:07.702

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:32:09.615

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system 2022/11/05T21:32:10.843

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-controls-system/members/admin/roles 2022/11/05T21:32:10.844

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-admin 2022/11/05T21:32:11.162

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dadmin&sortBy=startTime 2022/11/05T21:32:11.251

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-admin 2022/11/05T21:32:11.252

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-admin 200 19ms 15b 2022/11/05T21:32:11.271

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dadmin&start=1667653331&end=1667655131&step=60s&times=30&resources_filter=kubectl-admin-6dbcb94855-7m7kw%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:32:11.571

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dadmin&sortBy=startTime 2022/11/05T21:32:13.265

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dadmin&start=1667653333&end=1667655133&step=60s&times=30&resources_filter=kubectl-admin-6dbcb94855-7m7kw%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:32:13.338

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dadmin&resources_filter=kubectl-admin-6dbcb94855-7m7kw%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:32:16.412

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-admin-6dbcb94855-7m7kw 2022/11/05T21:32:16.902

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-admin-6dbcb94855-7m7kw 2022/11/05T21:32:36.956

   --> GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-admin-6dbcb94855-7m7kw 200 20ms 14b 2022/11/05T21:32:36.976

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-controls-system/pods/kubectl-admin-6dbcb94855-7m7kw/log?container=kubectl&tailLines=1000&timestamps=true&follow=false 2022/11/05T21:32:37.002

   <-- GET /apis/clusters/host/apps/v1/namespaces/kubesphere-controls-system/deployments/kubectl-admin 2022/11/05T21:32:41.762

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dadmin&sortBy=startTime 2022/11/05T21:32:41.837

   <-- GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-admin 2022/11/05T21:32:41.838

   --> GET /apis/clusters/host/autoscaling/v2beta2/namespaces/kubesphere-controls-system/horizontalpodautoscalers/kubectl-admin 200 21ms 15b 2022/11/05T21:32:41.859

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dadmin&start=1667653362&end=1667655162&step=60s&times=30&resources_filter=kubectl-admin-6dbcb94855-7m7kw%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:32:42.279

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:32:43.861

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?limit=10&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dadmin&sortBy=startTime 2022/11/05T21:32:43.909

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-controls-system/pods?cluster=host&ownerKind=ReplicaSet&labelSelector=kubesphere.io%2Fusername%3Dadmin&start=1667653364&end=1667655164&step=60s&times=30&resources_filter=kubectl-admin-6dbcb94855-7m7kw%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/05T21:32:44.394

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/05T21:32:45.434

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:32:45.956

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/05T21:32:47.534

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?page=2&sortBy=startTime&limit=10 2022/11/05T21:32:54.912

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?page=3&sortBy=startTime&limit=10 2022/11/05T21:33:04.276

   <-- GET /api/clusters/host/v1/namespaces/kube-system 2022/11/05T21:33:12.519

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kube-system/members/admin/roles 2022/11/05T21:33:12.521

   <-- GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18 2022/11/05T21:33:12.597

   <-- GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18 2022/11/05T21:33:20.903

   --> GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18 200 17ms 14b 2022/11/05T21:33:20.920

   <-- GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18/log?container=kube-apiserver&tailLines=1000&timestamps=true&follow=false 2022/11/05T21:33:20.969

   <-- GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18 2022/11/05T21:33:47.349

   --> GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18 200 21ms 14b 2022/11/05T21:33:47.370

   <-- GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18/log?container=kube-apiserver&tailLines=1000&timestamps=true&follow=true 2022/11/05T21:33:47.395

 Error: Http response closed while proxying /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18/log?container=kube-apiserver&tailLines=1000&timestamps=true&follow=true

     at ServerResponse.<anonymous> (/opt/kubesphere/console/server/server.js:48638:14)

     at ServerResponse.emit (events.js:326:22)

     at Socket.onServerResponseClose (_http_server.js:209:44)

     at Socket.emit (events.js:326:22)

     at TCP.<anonymous> (net.js:675:12)

   <-- GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18 2022/11/05T21:34:13.649

   --> GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18 200 22ms 14b 2022/11/05T21:34:13.670

   <-- GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18/log?container=kube-apiserver&tailLines=1000&timestamps=true&follow=false 2022/11/05T21:34:13.833

   <-- GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18 2022/11/05T21:34:17.528

   --> GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18 200 20ms 14b 2022/11/05T21:34:17.547

   <-- GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18/log?container=kube-apiserver&tailLines=1000&timestamps=true&follow=false 2022/11/05T21:34:17.598

   <-- GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18 2022/11/05T21:34:47.599

   --> GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18 200 36ms 14b 2022/11/05T21:34:47.635

   <-- GET /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18/log?container=kube-apiserver&tailLines=1000&timestamps=true&follow=true 2022/11/05T21:34:47.662

 Error: Http response closed while proxying /api/clusters/host/v1/namespaces/kube-system/pods/kube-apiserver-i-n0vhwq18/log?container=kube-apiserver&tailLines=1000&timestamps=true&follow=true

     at ServerResponse.<anonymous> (/opt/kubesphere/console/server/server.js:48638:14)

     at ServerResponse.emit (events.js:326:22)

     at Socket.onServerResponseClose (_http_server.js:209:44)

     at Socket.emit (events.js:326:22)

     at TCP.<anonymous> (net.js:675:12)

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/05T21:35:14.350

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/05T21:35:15.998

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?name=console&sortBy=startTime&limit=10 2022/11/05T21:35:19.066

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system 2022/11/05T21:35:26.031

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/11/05T21:35:26.032

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/05T21:35:26.414

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/05T21:35:36.908

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 17ms 14b 2022/11/05T21:35:36.925

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=1000&timestamps=true&follow=false 2022/11/05T21:35:36.951

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/05T21:35:49.542

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 19ms 14b 2022/11/05T21:35:49.561

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=1000&timestamps=true&follow=true 2022/11/05T21:35:49.998

   <-- GET /clusters/host/projects/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/resource-status 2022/11/05T21:36:03.136

   --> GET /clusters/host/projects/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/resource-status 200 59ms 17.8kb 2022/11/05T21:36:03.195

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/05T21:36:07.833

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/05T21:36:07.836

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/05T21:36:07.944

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system 2022/11/05T21:36:08.362

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/namespaces/kubesphere-system/members/admin/roles 2022/11/05T21:36:08.363

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/05T21:36:08.434

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/05T21:36:31.986

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?sortBy=startTime&limit=10 2022/11/05T21:36:34.609

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:36:47.720

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/deployments?sortBy=updateTime&limit=10 2022/11/05T21:36:50.867

 Error: Http response closed while proxying /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=1000&timestamps=true&follow=true

     at ServerResponse.<anonymous> (/opt/kubesphere/console/server/server.js:48638:14)

     at ServerResponse.emit (events.js:326:22)

     at Socket.onServerResponseClose (_http_server.js:209:44)

     at Socket.emit (events.js:326:22)

     at TCP.<anonymous> (net.js:675:12)

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/05T21:37:48.881

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 19ms 14b 2022/11/05T21:37:48.900

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=2000&timestamps=true&follow=true 2022/11/05T21:37:48.923

 Error: Http response closed while proxying /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=2000&timestamps=true&follow=true

     at ServerResponse.<anonymous> (/opt/kubesphere/console/server/server.js:48638:14)

     at ServerResponse.emit (events.js:326:22)

     at Socket.onServerResponseClose (_http_server.js:209:44)

     at Socket.emit (events.js:326:22)

     at TCP.<anonymous> (net.js:675:12)

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/05T21:38:02.709

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 22ms 14b 2022/11/05T21:38:02.731

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=3000&timestamps=true&follow=true 2022/11/05T21:38:02.760

 Error: Http response closed while proxying /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=3000&timestamps=true&follow=true

     at ServerResponse.<anonymous> (/opt/kubesphere/console/server/server.js:48638:14)

     at ServerResponse.emit (events.js:326:22)

     at Socket.onServerResponseClose (_http_server.js:209:44)

     at Socket.emit (events.js:326:22)

     at TCP.<anonymous> (net.js:675:12)

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/05T21:38:18.435

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 21ms 14b 2022/11/05T21:38:18.457

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=3000&timestamps=true&follow=false 2022/11/05T21:38:18.480

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/05T21:38:23.678

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 20ms 14b 2022/11/05T21:38:23.698

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=1000&timestamps=true&follow=false 2022/11/05T21:38:23.720

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/05T21:38:28.396

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 17ms 14b 2022/11/05T21:38:28.413

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=1000&timestamps=true&follow=false 2022/11/05T21:38:28.436

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/statefulsets?sortBy=createTime&limit=10 2022/11/05T21:45:52.854

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/statefulsets?sortBy=createTime&limit=10 2022/11/05T21:45:53.965

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/05T21:45:56.411

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 17ms 14b 2022/11/05T21:45:56.428

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=1000&timestamps=true&follow=false 2022/11/05T21:45:56.453

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/05T21:46:07.243

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 18ms 14b 2022/11/05T21:46:07.261

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=2000&timestamps=true&follow=false 2022/11/05T21:46:07.285

   <-- GET /clusters/host/statefulsets 2022/11/07T10:00:42.583

   --> GET /clusters/host/statefulsets 200 57ms 17.8kb 2022/11/07T10:00:42.640

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/07T10:00:44.462

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/07T10:00:44.464

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/07T10:00:44.639

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/statefulsets?sortBy=createTime&limit=10 2022/11/07T10:00:44.735

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/statefulsets?sortBy=createTime&limit=10 2022/11/07T10:00:45.860

   <-- GET / 2022/11/07T10:00:54.649

 UnauthorizedError: Not Login

     at Object.throw (/opt/kubesphere/console/server/server.js:22969:11)

     at getCurrentUser (/opt/kubesphere/console/server/server.js:6957:14)

     at renderView (/opt/kubesphere/console/server/server.js:71947:7)

     at runMicrotasks (<anonymous>)

     at processTicksAndRejections (internal/process/task_queues.js:97:5)

     at async /opt/kubesphere/console/server/server.js:40116:7

     at async logger (/opt/kubesphere/console/server/server.js:37060:7)

     at async /opt/kubesphere/console/server/server.js:31823:26

     at async /opt/kubesphere/console/server/server.js:31823:26

     at async /opt/kubesphere/console/server/server.js:31823:26

   --> GET / 302 4ms 43b 2022/11/07T10:00:54.653

   <-- GET /login 2022/11/07T10:00:54.655

   --> GET /login 200 9ms 16.91kb 2022/11/07T10:00:54.664

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/07T10:00:58.317

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components/ks-apiserver 2022/11/07T10:01:00.422

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/services/ks-apiserver 2022/11/07T10:01:00.504

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/11/07T10:01:00.579

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1667784660&end=1667786460&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/07T10:01:00.659

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?limit=10&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&sortBy=startTime 2022/11/07T10:01:02.574

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/07T10:01:02.612

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/namespaces/kubesphere-system/pods?cluster=host&labelSelector=app%3Dks-apiserver%2Ctier%3Dbackend&start=1667784662&end=1667786462&step=60s&times=30&resources_filter=ks-apiserver-7c8c448bbb-4682v%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/07T10:01:02.642

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/11/07T10:01:04.722

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/11/07T10:01:06.366

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/11/07T10:01:21.800

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?limit=-1&sortBy=createTime&page=1&annotation=kubesphere.io%2Fcreator 2022/11/07T10:01:21.802

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/11/07T10:01:22.888

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/11/07T10:01:23.191

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/11/07T10:01:23.193

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/11/07T10:01:27.630

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&sortBy=createTime&page=1 2022/11/07T10:01:32.449

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?limit=-1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&page=1 2022/11/07T10:01:32.450

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&sortBy=createTime&page=1 2022/11/07T10:01:48.966

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?limit=-1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&page=1 2022/11/07T10:01:48.967

   <-- GET /kapis/clusters/host/version 2022/11/07T10:02:11.766

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?cluster=host&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/11/07T10:02:11.767

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/11/07T10:03:29.686

   <-- GET /kapis/clusters/host/gateway.kubesphere.io/v1alpha1/namespaces/kubesphere-system/gateways 2022/11/07T10:03:48.659

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/11/07T10:03:53.740

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/11/07T10:03:53.743

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/11/07T10:04:15.121

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/11/07T10:04:31.561

   <-- GET /apis/clusters/host/apiextensions.k8s.io/v1/customresourcedefinitions/federatedworkspaceroles.types.kubefed.io 2022/11/07T10:04:34.955

   <-- GET /apis/clusters/host/types.kubefed.io/v1beta1/federatedworkspaceroles?limit=8 2022/11/07T10:04:35.052

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/customresourcedefinitions?sortBy=createTime&limit=10 2022/11/07T10:04:47.785

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/persistentvolumeclaims?sortBy=createTime&limit=10 2022/11/07T10:04:55.063

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/persistentvolumeclaims?sortBy=createTime&limit=10 2022/11/07T10:04:56.156

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/storageclasses?sortBy=createTime&limit=10 2022/11/07T10:04:56.383

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/volumesnapshots?sortBy=createTime&limit=10 2022/11/07T10:04:57.193

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/storageclasses?sortBy=createTime&limit=10 2022/11/07T10:04:57.470

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/07T10:05:00.336

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/07T10:05:00.337

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/07T10:05:00.441

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/11/07T10:05:36.621

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667783136&end=1667786736&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/11/07T10:05:36.729

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/11/07T10:05:40.616

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1667784940&end=1667786740&step=60s&times=30&resources_filter=i-n0vhwq18-shell-access%7Ckubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/07T10:05:40.757

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667783141&end=1667786741&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/11/07T10:05:41.375

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/07T10:05:46.836

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/07T10:05:46.837

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/07T10:05:46.927

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes/i-n0vhwq18 2022/11/07T10:05:53.435

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667783153&end=1667786753&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/11/07T10:05:53.534

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/pods?limit=6&nodeName=i-n0vhwq18&sortBy=startTime 2022/11/07T10:06:02.781

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes/i-n0vhwq18/pods?cluster=host&start=1667784962&end=1667786762&step=60s&times=30&resources_filter=i-n0vhwq18-shell-access%7Ckubectl-wayne-758fcc6996-cpjx9%7Ckubefed-controller-manager-76888f8c88-xmksl%7Cprometheus-k8s-0%7Ckubefed-admission-webhook-6f9f5dcbbf-4hcpg%7Ctower-786bb99f5d-zjbtc%24&metrics_filter=pod_cpu_usage%7Cpod_memory_usage_wo_cache%24 2022/11/07T10:06:02.917

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667756765&end=1667786765&step=600s&times=50&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_load1%7Cnode_load5%7Cnode_load15%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_disk_inode_utilisation%7Cnode_device_size_utilisation%7Cnode_disk_inode_usage%7Cnode_disk_inode_total%7Cnode_disk_read_iops%7Cnode_disk_write_iops%7Cnode_disk_read_throughput%7Cnode_disk_write_throughput%7Cnode_net_bytes_transmitted%7Cnode_net_bytes_received%24 2022/11/07T10:06:05.434

   <-- GET /api/clusters/host/v1/events?fieldSelector=involvedObject.name%3Di-n0vhwq18%2CinvolvedObject.kind%3DNode 2022/11/07T10:06:06.768

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?start=1667783168&end=1667786768&step=180s&times=20&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_utilisation%7Cnode_memory_utilisation%7Cnode_disk_size_utilisation%7Cnode_pod_utilisation%24 2022/11/07T10:06:08.250

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?sortBy=createTime&limit=10&labelSelector=%21node-role.kubernetes.io%2Fedge 2022/11/07T10:06:09.430

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/nodes?labelSelector=node-role.kubernetes.io%2Fmaster 2022/11/07T10:06:09.431

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?cluster=host&resources_filter=i-n0vhwq18%24&metrics_filter=node_cpu_usage%7Cnode_cpu_total%7Cnode_cpu_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_memory_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%24 2022/11/07T10:06:09.518

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/07T10:06:16.922

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?sortBy=createTime&limit=10&annotation=kubesphere.io%2Fcreator 2022/11/07T10:06:30.578

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?label=iam.kubesphere.io/role-template=true 2022/11/07T10:06:30.585

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/11/07T10:06:32.057

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clusterroles?limit=-1&sortBy=createTime&page=1&annotation=kubesphere.io%2Fcreator 2022/11/07T10:06:32.058

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers?sortBy=createTime&limit=10 2022/11/07T10:06:33.149

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/11/07T10:06:35.326

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?limit=10&page=1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime 2022/11/07T10:06:39.474

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&sortBy=createTime&page=1 2022/11/07T10:06:44.524

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?limit=-1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&page=1 2022/11/07T10:06:44.527

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=-1&sortBy=createTime&page=1 2022/11/07T10:06:51.331

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/11/07T10:06:51.335

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/11/07T10:06:52.444

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/11/07T10:06:53.096

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/users?sortBy=createTime&limit=10 2022/11/07T10:06:56.487

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/c 2022/11/07T10:07:18.727

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/c 200 12ms 15b 2022/11/07T10:07:18.739

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/ch 2022/11/07T10:07:19.030

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/ch 200 12ms 15b 2022/11/07T10:07:19.042

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/che 2022/11/07T10:07:19.350

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/che 200 14ms 15b 2022/11/07T10:07:19.364

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chen 2022/11/07T10:07:19.722

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chen 200 11ms 15b 2022/11/07T10:07:19.733

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chenz 2022/11/07T10:07:21.347

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chenz 200 14ms 15b 2022/11/07T10:07:21.361

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chenz-t 2022/11/07T10:07:22.872

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chenz-t 200 13ms 15b 2022/11/07T10:07:22.884

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chenz-test 2022/11/07T10:07:23.325

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chenz-test 200 13ms 15b 2022/11/07T10:07:23.338

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chenz-test 2022/11/07T10:07:32.831

   --> GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chenz-test 200 13ms 15b 2022/11/07T10:07:32.844

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=-1&sortBy=createTime&page=1 2022/11/07T10:07:32.874

   <-- POST /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates 2022/11/07T10:07:58.516

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/11/07T10:07:58.606

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/11/07T10:07:59.600

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/11/07T10:08:08.095

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/11/07T10:08:08.096

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/member1 2022/11/07T10:08:11.421

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/07T10:08:11.424

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/07T10:08:11.608

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/components 2022/11/07T10:08:11.746

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/11/07T10:08:11.747

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/11/07T10:08:11.748

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/11/07T10:08:11.750

   <-- GET /kapis/clusters/member1/version 2022/11/07T10:08:11.751

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/11/07T10:08:11.892

   <-- GET /kapis/clusters/member1/version 2022/11/07T10:08:14.255

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/cluster?cluster=member1&metrics_filter=cluster_cpu_total%7Ccluster_memory_total%7Ccluster_disk_size_capacity%7Ccluster_node_total%24 2022/11/07T10:08:14.256

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/11/07T10:08:26.355

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&sortBy=createTime&page=1 2022/11/07T10:08:28.594

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/workspaces?limit=-1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&page=1 2022/11/07T10:08:28.595

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/11/07T10:08:47.607

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/11/07T10:08:47.608

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/07T10:08:48.594

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/07T10:08:48.597

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/07T10:08:48.712

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/07T10:08:48.813

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/11/07T10:08:48.814

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/11/07T10:08:48.815

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/11/07T10:08:48.830

   <-- GET /kapis/clusters/host/version 2022/11/07T10:08:48.832

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/11/07T10:08:48.900

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/11/07T10:08:52.770

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&sortBy=createTime&page=1 2022/11/07T10:08:54.939

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?limit=-1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&page=1 2022/11/07T10:08:54.941

   <-- PATCH /apis/cluster.kubesphere.io/v1alpha1/clusters/host 2022/11/07T10:09:01.260

   <-- PATCH /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chenz-test 2022/11/07T10:09:01.348

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/07T10:09:01.435

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&limit=10 2022/11/07T10:09:01.508

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&sortBy=createTime&page=1 2022/11/07T10:09:13.076

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?limit=-1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&page=1 2022/11/07T10:09:13.079

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?limit=-1&sortBy=createTime&page=1 2022/11/07T10:11:30.700

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/workspaces?limit=-1&labelSelector=kubefed.io%2Fmanaged%3Dtrue&sortBy=createTime&page=1 2022/11/07T10:11:30.701

   <-- GET /kapis/clusters/host/gateway.kubesphere.io/v1alpha1/namespaces/kubesphere-system/gateways 2022/11/07T10:13:25.848

   <-- GET /kapis/clusters/host/gateway.kubesphere.io/v1alpha1/gateways?sortBy=createTime&limit=10 2022/11/07T10:13:28.742

   <-- GET /kapis/clusters/host/gateway.kubesphere.io/v1alpha1/namespaces/kubesphere-system/gateways 2022/11/07T10:13:30.375

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/11/07T10:15:04.657

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/11/07T10:15:04.658

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/11/07T10:15:07.368

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=-1&sortBy=createTime&page=1 2022/11/07T10:15:07.371

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates?sortBy=createTime&limit=10 2022/11/07T10:15:08.459

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chenz-test 2022/11/07T10:15:11.071

   <-- GET /kapis/tenant.kubesphere.io/v1alpha2/workspaces/chenz-test/clusters 2022/11/07T10:15:11.073

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/workspaces/chenz-test/workspacemembers/admin/workspaceroles 2022/11/07T10:15:11.096

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=-1&sortBy=createTime&page=1 2022/11/07T10:15:11.235

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/workspaces/chenz-test?workspace=chenz-test&start=1667700911&end=1667787311&step=3600s&times=24&metrics_filter=workspace_cpu_usage%7Cworkspace_memory_usage_wo_cache%7Cworkspace_disk_size_usage%24 2022/11/07T10:15:11.247

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/workspaces/chenz-test?workspace=chenz-test&start=1667700911&end=1667787311&step=3600s&times=24&metrics_filter=workspace_deployment_count%7Cworkspace_statefulset_count%7Cworkspace_daemonset_count%7Cworkspace_job_count%7Cworkspace_cronjob_count%7Cworkspace_pvc_count%7Cworkspace_service_count%7Cworkspace_ingresses_extensions_count%7Cworkspace_pod_running_count%24 2022/11/07T10:15:11.249

   <-- GET /kapis/clusters/member1/tenant.kubesphere.io/v1alpha2/workspaces/chenz-test/namespaces?labelSelector=kubefed.io%2Fmanaged%21%3Dtrue%2C%20kubesphere.io%2Fkubefed-host-namespace%21%3Dtrue&sortBy=createTime&limit=10 2022/11/07T10:15:12.657

   <-- GET /kapis/tenant.kubesphere.io/v1alpha2/workspaces/chenz-test/clusters 2022/11/07T10:15:16.995

   <-- GET /api/clusters/member1/v1/namespaces/h 2022/11/07T10:15:21.545

   --> GET /api/clusters/member1/v1/namespaces/h 200 37ms 15b 2022/11/07T10:15:21.581

   <-- GET /api/clusters/member1/v1/namespaces/chenz-p 2022/11/07T10:15:24.133

   --> GET /api/clusters/member1/v1/namespaces/chenz-p 200 28ms 15b 2022/11/07T10:15:24.161

   <-- GET /api/clusters/member1/v1/namespaces/chenz-pro 2022/11/07T10:15:24.424

   --> GET /api/clusters/member1/v1/namespaces/chenz-pro 200 24ms 15b 2022/11/07T10:15:24.448

   <-- GET /api/clusters/member1/v1/namespaces/chenz-projec 2022/11/07T10:15:25.557

   --> GET /api/clusters/member1/v1/namespaces/chenz-projec 200 22ms 15b 2022/11/07T10:15:25.580

   <-- GET /api/clusters/member1/v1/namespaces/chenz-project 2022/11/07T10:15:25.728

   --> GET /api/clusters/member1/v1/namespaces/chenz-project 200 24ms 15b 2022/11/07T10:15:25.752

   <-- GET /api/clusters/host/v1/namespaces/chenz-project 2022/11/07T10:15:29.314

   --> GET /api/clusters/host/v1/namespaces/chenz-project 200 18ms 15b 2022/11/07T10:15:29.332

   <-- GET /api/clusters/member1/v1/namespaces/chenz-project 2022/11/07T10:15:30.936

   --> GET /api/clusters/member1/v1/namespaces/chenz-project 200 24ms 15b 2022/11/07T10:15:30.960

   <-- GET /api/clusters/member1/v1/namespaces/chenz-project 2022/11/07T10:15:33.125

   --> GET /api/clusters/member1/v1/namespaces/chenz-project 200 23ms 15b 2022/11/07T10:15:33.148

   <-- POST /kapis/clusters/member1/tenant.kubesphere.io/v1alpha2/workspaces/chenz-test/namespaces 2022/11/07T10:15:33.185

   <-- GET /kapis/clusters/member1/tenant.kubesphere.io/v1alpha2/workspaces/chenz-test/namespaces?labelSelector=kubefed.io%2Fmanaged%21%3Dtrue%2C%20kubesphere.io%2Fkubefed-host-namespace%21%3Dtrue&sortBy=createTime&limit=10 2022/11/07T10:15:33.299

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/workspaces/chenz-test/namespaces?resources_filter=chenz-project%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/07T10:15:33.775

   <-- GET /kapis/clusters/member1/tenant.kubesphere.io/v1alpha2/workspaces/chenz-test/namespaces?labelSelector=kubefed.io%2Fmanaged%21%3Dtrue%2C%20kubesphere.io%2Fkubefed-host-namespace%21%3Dtrue&sortBy=createTime&limit=10 2022/11/07T10:15:34.300

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/workspaces/chenz-test/namespaces?resources_filter=chenz-project%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/07T10:15:34.385

   <-- GET /kapis/tenant.kubesphere.io/v1alpha2/workspaces/chenz-test/federatednamespaces?sortBy=createTime&limit=10 2022/11/07T10:15:38.216

   <-- GET /kapis/clusters/member1/tenant.kubesphere.io/v1alpha2/workspaces/chenz-test/namespaces?labelSelector=kubefed.io%2Fmanaged%21%3Dtrue%2C%20kubesphere.io%2Fkubefed-host-namespace%21%3Dtrue&sortBy=createTime&limit=10 2022/11/07T10:15:39.274

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/workspaces/chenz-test/namespaces?resources_filter=chenz-project%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/07T10:15:39.381

   <-- GET /kapis/clusters/member1/tenant.kubesphere.io/v1alpha2/workspaces/chenz-test/namespaces?labelSelector=kubefed.io%2Fmanaged%21%3Dtrue%2C%20kubesphere.io%2Fkubefed-host-namespace%21%3Dtrue&sortBy=createTime&limit=10 2022/11/07T10:15:40.449

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/workspaces/chenz-test/namespaces?resources_filter=chenz-project%24&metrics_filter=namespace_cpu_usage%7Cnamespace_memory_usage_wo_cache%7Cnamespace_pod_count%24 2022/11/07T10:15:40.530

   <-- GET /kapis/clusters/member1/tenant.kubesphere.io/v1alpha2/workspaces/chenz-test/namespaces/chenz-project 2022/11/07T10:15:41.194

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/member1 2022/11/07T10:15:41.196

   <-- GET /kapis/iam.kubesphere.io/v1alpha2/workspaces/chenz-test/workspacemembers/admin/workspaceroles 2022/11/07T10:15:41.221

   <-- GET /kapis/clusters/member1/iam.kubesphere.io/v1alpha2/namespaces/chenz-project/members/admin/roles 2022/11/07T10:15:41.341

   <-- GET /kapis/tenant.kubesphere.io/v1alpha3/workspacetemplates/chenz-test 2022/11/07T10:15:41.474

   <-- GET /kapis/tenant.kubesphere.io/v1alpha2/workspaces/chenz-test/clusters 2022/11/07T10:15:41.481

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/namespaces/chenz-project?namespace=chenz-project&start=1667744141&end=1667787341&step=4320s&times=10&metrics_filter=namespace_pod_count%7Cnamespace_deployment_count%7Cnamespace_statefulset_count%7Cnamespace_daemonset_count%7Cnamespace_job_count%7Cnamespace_cronjob_count%7Cnamespace_pvc_count%7Cnamespace_service_count%7Cnamespace_secret_count%7Cnamespace_configmap_count%7Cnamespace_ingresses_extensions_count%24 2022/11/07T10:15:41.485

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/namespaces/chenz-project/quotas 2022/11/07T10:15:41.489

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha2/namespaces/chenz-project/abnormalworkloads 2022/11/07T10:15:41.493

   <-- GET /api/clusters/member1/v1/namespaces/chenz-project/resourcequotas?workspace=chenz-test 2022/11/07T10:15:41.499

   <-- GET /api/clusters/member1/v1/namespaces/chenz-project/limitranges?workspace=chenz-test 2022/11/07T10:15:41.537

   <-- GET /kapis/openpitrix.io/v1/workspaces/chenz-test/clusters/member1/namespaces/chenz-project/applications?conditions=status%3Dcreating%7Cactive%7Cfailed%7Cdeleting%7Cupgrading%7Ccreated%7Cupgraded&paging=limit%3D3%2Cpage%3D1&orderBy=status_time 2022/11/07T10:15:41.542

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/namespaces/chenz-project/workloads?type=rank&metrics_filter=workload_cpu_usage%7Cworkload_memory_usage_wo_cache%7Cworkload_net_bytes_transmitted%7Cworkload_net_bytes_received%7Creplica&page=1&limit=10&sort_type=desc&sort_metric=workload_cpu_usage 2022/11/07T10:15:41.598

   <-- GET /kapis/clusters/member1/monitoring.kubesphere.io/v1alpha3/namespaces/chenz-project?namespace=chenz-project&start=1667744151&end=1667787351&step=4320s&times=10&metrics_filter=namespace_pod_count%7Cnamespace_deployment_count%7Cnamespace_statefulset_count%7Cnamespace_daemonset_count%7Cnamespace_job_count%7Cnamespace_cronjob_count%7Cnamespace_pvc_count%7Cnamespace_service_count%7Cnamespace_secret_count%7Cnamespace_configmap_count%7Cnamespace_ingresses_extensions_count%24 2022/11/07T10:15:51.495

   <-- GET /kapis/openpitrix.io/v1/workspaces/chenz-test/clusters/member1/namespaces/chenz-project/applications?conditions=status%3Dcreating%7Cactive%7Cfailed%7Cdeleting%7Cupgrading%7Ccreated%7Cupgraded&paging=limit%3D10%2Cpage%3D1&orderBy=status_time 2022/11/07T10:15:58.106

   <-- GET /kapis/openpitrix.io/v1/workspaces/chenz-test/repos?orderBy=create_time&paging=limit%3D200%2Cpage%3D1&conditions=status%3Dactive&reverse=true 2022/11/07T10:16:03.470

   <-- GET /kapis/openpitrix.io/v1/workspaces/chenz-test/apps?orderBy=create_time&paging=limit%3D12%2Cpage%3D1&conditions=status%3Ddraft%7Cactive%7Csuspended%7Cpassed&reverse=true 2022/11/07T10:16:03.533

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces/chenz-project/services?sortBy=createTime&limit=10 2022/11/07T10:16:08.104

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces/chenz-project/deployments?sortBy=updateTime&limit=10 2022/11/07T10:16:09.101

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces/chenz-project/jobs?sortBy=updateTime&limit=10 2022/11/07T10:16:09.939

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces/chenz-project/ingresses?sortBy=createTime&limit=10 2022/11/07T10:16:10.446

   <-- GET /kapis/clusters/member1/gateway.kubesphere.io/v1alpha1/namespaces/chenz-project/gateways/ 2022/11/07T10:16:10.450

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces/chenz-project/pods?sortBy=startTime&limit=10 2022/11/07T10:16:11.802

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces/chenz-project/persistentvolumeclaims?sortBy=createTime&limit=10 2022/11/07T10:16:15.129

   <-- GET /kapis/clusters/member1/resources.kubesphere.io/v1alpha3/namespaces/chenz-project/volumesnapshots?sortBy=createTime&limit=10 2022/11/07T10:16:15.817

   <-- GET /kapis/clusters/member1/gateway.kubesphere.io/v1alpha1/namespaces/chenz-project/gateways/ 2022/11/07T10:16:23.781

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?labelSelector=cluster-role.kubesphere.io%2Fhost%3D&limit=-1&sortBy=createTime&page=1 2022/11/07T10:16:32.725

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters?limit=10&labelSelector=%21cluster-role.kubesphere.io%2Fhost&sortBy=createTime 2022/11/07T10:16:32.726

   <-- GET /kapis/resources.kubesphere.io/v1alpha3/clusters/host 2022/11/07T10:16:34.480

   <-- GET /kapis/clusters/host/iam.kubesphere.io/v1alpha2/clustermembers/admin/clusterroles 2022/11/07T10:16:34.482

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha3/namespaces?labelSelector=%21kubesphere.io%2Fdevopsproject&sortBy=createTime&limit=10 2022/11/07T10:16:34.595

   <-- GET /kapis/clusters/host/resources.kubesphere.io/v1alpha2/components 2022/11/07T10:16:34.704

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/cluster?metrics_filter=cluster_cpu_usage%7Ccluster_cpu_total%7Ccluster_memory_usage_wo_cache%7Ccluster_memory_total%7Ccluster_disk_size_usage%7Ccluster_disk_size_capacity%7Ccluster_pod_running_count%7Ccluster_pod_quota%24 2022/11/07T10:16:34.705

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/apiserver?metrics_filter=apiserver_request_latencies%7Capiserver_request_rate%24 2022/11/07T10:16:34.707

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/nodes?type=rank&metrics_filter=node_cpu_utilisation%7Cnode_cpu_usage%7Cnode_cpu_total%7Cnode_memory_utilisation%7Cnode_memory_usage_wo_cache%7Cnode_memory_total%7Cnode_disk_size_utilisation%7Cnode_disk_size_usage%7Cnode_disk_size_capacity%7Cnode_pod_utilisation%7Cnode_pod_running_count%7Cnode_pod_quota%7Cnode_disk_inode_utilisation%7Cnode_disk_inode_total%7Cnode_disk_inode_usage%7Cnode_load1%24&page=1&limit=5&sort_type=desc&sort_metric=node_cpu_utilisation 2022/11/07T10:16:34.712

   <-- GET /kapis/clusters/host/version 2022/11/07T10:16:34.713

   <-- GET /kapis/clusters/host/monitoring.kubesphere.io/v1alpha3/components/scheduler?metrics_filter=scheduler_schedule_attempts%24 2022/11/07T10:16:34.837

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 2022/11/08T09:49:58.245

   --> GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz 200 21ms 14b 2022/11/08T09:49:58.266

   <-- GET /api/clusters/host/v1/namespaces/kubesphere-system/pods/ks-console-54bd5bcbc6-mllfz/log?container=ks-console&tailLines=3000&timestamps=true&follow=false 2022/11/08T09:49:58.311
`;

export default log;
