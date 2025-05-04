export default {
    "scalars": [
        1,
        2,
        10,
        12,
        13,
        14,
        15,
        17,
        19,
        22,
        31,
        32,
        33,
        35,
        40,
        45,
        47,
        50,
        55,
        64,
        75,
        87,
        89,
        100,
        102,
        103,
        111,
        113,
        119,
        121,
        122,
        134,
        147,
        148,
        185,
        194,
        203,
        244,
        250,
        253,
        256,
        258,
        262,
        263,
        265,
        276,
        287,
        290,
        294,
        295,
        296,
        297,
        298,
        311,
        318,
        327,
        330,
        334,
        335,
        341,
        343,
        344,
        349,
        377,
        378,
        382,
        390,
        391,
        394
    ],
    "types": {
        "AccessRule": {
            "disallowed": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ActiveFeatureFlag": {},
        "ActiveServiceFeatureFlag": {},
        "AdoptionInfo": {
            "adoptionLevel": [
                87
            ],
            "createdAt": [
                35
            ],
            "customer": [
                301
            ],
            "deltaLevel": [
                87
            ],
            "id": [
                100
            ],
            "matchedIcpEmail": [
                290
            ],
            "monthlyEstimatedUsage": [
                87
            ],
            "numConfigFile": [
                103
            ],
            "numCronSchedule": [
                103
            ],
            "numDeploys": [
                103
            ],
            "numEnvs": [
                103
            ],
            "numFailedDeploys": [
                103
            ],
            "numHealthcheck": [
                103
            ],
            "numIconConfig": [
                103
            ],
            "numRegion": [
                103
            ],
            "numReplicas": [
                103
            ],
            "numRootDirectory": [
                103
            ],
            "numSeats": [
                103
            ],
            "numServices": [
                103
            ],
            "numSupportRequests": [
                103
            ],
            "numVariables": [
                103
            ],
            "numWatchPatterns": [
                103
            ],
            "totalCores": [
                87
            ],
            "totalDisk": [
                87
            ],
            "totalNetwork": [
                87
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                290
            ]
        },
        "AggregatedUsage": {
            "measurement": [
                121
            ],
            "tags": [
                123
            ],
            "value": [
                87
            ],
            "__typename": [
                290
            ]
        },
        "AllDomains": {
            "customDomains": [
                23
            ],
            "serviceDomains": [
                271
            ],
            "__typename": [
                290
            ]
        },
        "ApiToken": {
            "displayToken": [
                290
            ],
            "id": [
                100
            ],
            "name": [
                290
            ],
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ApiTokenCreateInput": {
            "name": [
                290
            ],
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "BanReasonHistory": {
            "actor": [
                348
            ],
            "banReason": [
                290
            ],
            "createdAt": [
                35
            ],
            "id": [
                100
            ],
            "__typename": [
                290
            ]
        },
        "BaseEnvironmentOverrideInput": {
            "baseEnvironmentOverrideId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "BigInt": {},
        "BillingPeriod": {
            "end": [
                35
            ],
            "start": [
                35
            ],
            "__typename": [
                290
            ]
        },
        "Boolean": {},
        "Builder": {},
        "CDNProvider": {},
        "CanvasConfig": {},
        "CertificatePublicData": {
            "domainNames": [
                290
            ],
            "expiresAt": [
                35
            ],
            "fingerprintSha256": [
                290
            ],
            "issuedAt": [
                35
            ],
            "keyType": [
                113
            ],
            "__typename": [
                290
            ]
        },
        "CertificateStatus": {},
        "CnameCheck": {
            "link": [
                290
            ],
            "message": [
                290
            ],
            "status": [
                19
            ],
            "__typename": [
                290
            ]
        },
        "CnameCheckStatus": {},
        "Container": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "environment": [
                63
            ],
            "environmentId": [
                290
            ],
            "id": [
                100
            ],
            "migratedAt": [
                35
            ],
            "plugin": [
                142
            ],
            "pluginId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Credit": {
            "amount": [
                87
            ],
            "createdAt": [
                35
            ],
            "customerId": [
                290
            ],
            "id": [
                100
            ],
            "memo": [
                290
            ],
            "type": [
                22
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                290
            ]
        },
        "CreditType": {},
        "CustomDomain": {
            "cnameCheck": [
                18
            ],
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "domain": [
                290
            ],
            "edgeId": [
                290
            ],
            "environmentId": [
                290
            ],
            "id": [
                100
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "status": [
                25
            ],
            "targetPort": [
                103
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                290
            ]
        },
        "CustomDomainCreateInput": {
            "domain": [
                290
            ],
            "environmentId": [
                290
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "targetPort": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "CustomDomainStatus": {
            "cdnProvider": [
                14
            ],
            "certificateStatus": [
                17
            ],
            "certificates": [
                16
            ],
            "dnsRecords": [
                34
            ],
            "__typename": [
                290
            ]
        },
        "Customer": {
            "appliedCredits": [
                87
            ],
            "billingEmail": [
                290
            ],
            "billingPeriod": [
                11
            ],
            "creditBalance": [
                87
            ],
            "credits": [
                27,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "currentUsage": [
                87
            ],
            "defaultPaymentMethod": [
                138
            ],
            "defaultPaymentMethodId": [
                290
            ],
            "hasExhaustedFreePlan": [
                12
            ],
            "id": [
                100
            ],
            "invoices": [
                29
            ],
            "isPrepaying": [
                12
            ],
            "isTrialing": [
                12
            ],
            "isUsageSubscriber": [
                12
            ],
            "isWithdrawingToCredits": [
                12
            ],
            "planLimitOverride": [
                140
            ],
            "remainingUsageCreditBalance": [
                87
            ],
            "state": [
                297
            ],
            "stripeCustomerId": [
                290
            ],
            "subscriptions": [
                30
            ],
            "usageLimit": [
                345
            ],
            "workspace": [
                395
            ],
            "__typename": [
                290
            ]
        },
        "CustomerCreditsConnection": {
            "edges": [
                28
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "CustomerCreditsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                21
            ],
            "__typename": [
                290
            ]
        },
        "CustomerInvoice": {
            "amountPaid": [
                87
            ],
            "hostedURL": [
                290
            ],
            "invoiceId": [
                290
            ],
            "items": [
                293
            ],
            "paymentIntentStatus": [
                290
            ],
            "pdfURL": [
                290
            ],
            "periodEnd": [
                290
            ],
            "periodStart": [
                290
            ],
            "status": [
                290
            ],
            "subscriptionId": [
                290
            ],
            "total": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "CustomerSubscription": {
            "billingCycleAnchor": [
                35
            ],
            "cancelAt": [
                290
            ],
            "cancelAtPeriodEnd": [
                12
            ],
            "couponId": [
                290
            ],
            "discounts": [
                292
            ],
            "id": [
                290
            ],
            "items": [
                293
            ],
            "latestInvoiceId": [
                290
            ],
            "nextInvoiceCurrentTotal": [
                103
            ],
            "nextInvoiceDate": [
                290
            ],
            "status": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "DNSRecordPurpose": {},
        "DNSRecordStatus": {},
        "DNSRecordType": {},
        "DNSRecords": {
            "currentValue": [
                290
            ],
            "fqdn": [
                290
            ],
            "hostlabel": [
                290
            ],
            "purpose": [
                31
            ],
            "recordType": [
                33
            ],
            "requiredValue": [
                290
            ],
            "status": [
                32
            ],
            "zone": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "DateTime": {},
        "Deployment": {
            "canRedeploy": [
                12
            ],
            "canRollback": [
                12
            ],
            "createdAt": [
                35
            ],
            "creator": [
                37
            ],
            "deploymentStopped": [
                12
            ],
            "environment": [
                63
            ],
            "environmentId": [
                290
            ],
            "id": [
                100
            ],
            "meta": [
                47
            ],
            "projectId": [
                290
            ],
            "service": [
                266
            ],
            "serviceId": [
                290
            ],
            "snapshotId": [
                290
            ],
            "sockets": [
                49
            ],
            "staticUrl": [
                290
            ],
            "status": [
                50
            ],
            "suggestAddServiceDomain": [
                12
            ],
            "updatedAt": [
                35
            ],
            "url": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentCreator": {
            "avatar": [
                290
            ],
            "email": [
                290
            ],
            "id": [
                290
            ],
            "name": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentEvent": {
            "completedAt": [
                35
            ],
            "createdAt": [
                35
            ],
            "id": [
                100
            ],
            "payload": [
                39
            ],
            "step": [
                40
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentEventPayload": {
            "error": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentEventStep": {},
        "DeploymentInstanceExecution": {
            "completedAt": [
                35
            ],
            "createdAt": [
                35
            ],
            "deploymentId": [
                290
            ],
            "deploymentMeta": [
                47
            ],
            "id": [
                100
            ],
            "status": [
                45
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentInstanceExecutionCreateInput": {
            "serviceInstanceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentInstanceExecutionInput": {
            "deploymentId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentInstanceExecutionListInput": {
            "environmentId": [
                290
            ],
            "serviceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentInstanceStatus": {},
        "DeploymentListInput": {
            "environmentId": [
                290
            ],
            "includeDeleted": [
                12
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "status": [
                51
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentMeta": {},
        "DeploymentSnapshot": {
            "createdAt": [
                35
            ],
            "id": [
                100
            ],
            "updatedAt": [
                35
            ],
            "variables": [
                75
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentSocket": {
            "ipv6": [
                12
            ],
            "port": [
                103
            ],
            "processName": [
                290
            ],
            "updatedAt": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentStatus": {},
        "DeploymentStatusInput": {
            "in": [
                50
            ],
            "notIn": [
                50
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentTrigger": {
            "baseEnvironmentOverrideId": [
                290
            ],
            "branch": [
                290
            ],
            "checkSuites": [
                12
            ],
            "environmentId": [
                290
            ],
            "id": [
                100
            ],
            "projectId": [
                290
            ],
            "provider": [
                290
            ],
            "repository": [
                290
            ],
            "serviceId": [
                290
            ],
            "validCheckSuites": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentTriggerCreateInput": {
            "branch": [
                290
            ],
            "checkSuites": [
                12
            ],
            "environmentId": [
                290
            ],
            "projectId": [
                290
            ],
            "provider": [
                290
            ],
            "repository": [
                290
            ],
            "rootDirectory": [
                290
            ],
            "serviceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "DeploymentTriggerUpdateInput": {
            "branch": [
                290
            ],
            "checkSuites": [
                12
            ],
            "repository": [
                290
            ],
            "rootDirectory": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "DisplayConfig": {},
        "DockerComposeImport": {
            "errors": [
                290
            ],
            "patch": [
                64
            ],
            "__typename": [
                290
            ]
        },
        "Domain": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "domain": [
                290
            ],
            "edgeId": [
                290
            ],
            "environmentId": [
                290
            ],
            "id": [
                100
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "targetPort": [
                103
            ],
            "updatedAt": [
                35
            ],
            "on_CustomDomain": [
                23
            ],
            "on_ServiceDomain": [
                271
            ],
            "__typename": [
                290
            ]
        },
        "DomainAvailable": {
            "available": [
                12
            ],
            "message": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "DomainWithStatus": {
            "cdnProvider": [
                14
            ],
            "certificateStatus": [
                17
            ],
            "certificates": [
                16
            ],
            "dnsRecords": [
                34
            ],
            "domain": [
                57
            ],
            "__typename": [
                290
            ]
        },
        "EgressGateway": {
            "ipv4": [
                290
            ],
            "region": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "EgressGatewayCreateInput": {
            "environmentId": [
                290
            ],
            "region": [
                290
            ],
            "serviceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "EgressGatewayServiceTargetInput": {
            "environmentId": [
                290
            ],
            "serviceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Environment": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "deploymentTriggers": [
                66,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "deployments": [
                68,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "id": [
                100
            ],
            "isEphemeral": [
                12
            ],
            "meta": [
                70
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "serviceInstances": [
                72,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "sourceEnvironment": [
                63
            ],
            "unmergedChangesCount": [
                103
            ],
            "updatedAt": [
                35
            ],
            "variables": [
                76,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "volumeInstances": [
                78,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentConfig": {},
        "EnvironmentCreateInput": {
            "ephemeral": [
                12
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "skipInitialDeploys": [
                12
            ],
            "sourceEnvironmentId": [
                290
            ],
            "stageInitialChanges": [
                12
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentDeploymentTriggersConnection": {
            "edges": [
                67
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentDeploymentTriggersConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                52
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentDeploymentsConnection": {
            "edges": [
                69
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentDeploymentsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                36
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentMeta": {
            "baseBranch": [
                290
            ],
            "branch": [
                290
            ],
            "prCommentId": [
                103
            ],
            "prNumber": [
                103
            ],
            "prRepo": [
                290
            ],
            "prTitle": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentRenameInput": {
            "name": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentServiceInstancesConnection": {
            "edges": [
                73
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentServiceInstancesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                275
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentTriggersDeployInput": {
            "environmentId": [
                290
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentVariables": {},
        "EnvironmentVariablesConnection": {
            "edges": [
                77
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentVariablesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                365
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentVolumeInstancesConnection": {
            "edges": [
                79
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "EnvironmentVolumeInstancesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                374
            ],
            "__typename": [
                290
            ]
        },
        "EstimatedUsage": {
            "estimatedValue": [
                87
            ],
            "measurement": [
                121
            ],
            "projectId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Event": {
            "action": [
                290
            ],
            "createdAt": [
                35
            ],
            "environment": [
                63
            ],
            "environmentId": [
                290
            ],
            "id": [
                100
            ],
            "object": [
                290
            ],
            "payload": [
                111
            ],
            "project": [
                161
            ],
            "projectId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "EventFilterInput": {
            "action": [
                83
            ],
            "object": [
                83
            ],
            "__typename": [
                290
            ]
        },
        "EventStringListFilter": {
            "in": [
                290
            ],
            "notIn": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ExplicitOwnerInput": {
            "id": [
                290
            ],
            "type": [
                262
            ],
            "__typename": [
                290
            ]
        },
        "ExternalWorkspace": {
            "avatar": [
                290
            ],
            "banReason": [
                290
            ],
            "createdAt": [
                35
            ],
            "customerState": [
                297
            ],
            "discordRole": [
                290
            ],
            "hasBAA": [
                12
            ],
            "id": [
                290
            ],
            "name": [
                290
            ],
            "preferredRegion": [
                290
            ],
            "projects": [
                161
            ],
            "subscriptionModel": [
                294
            ],
            "supportTierOverride": [
                290
            ],
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "FeatureFlagToggleInput": {
            "flag": [
                1
            ],
            "__typename": [
                290
            ]
        },
        "Float": {},
        "FunctionRuntime": {
            "image": [
                290
            ],
            "latestVersion": [
                90
            ],
            "name": [
                89
            ],
            "versions": [
                90
            ],
            "__typename": [
                290
            ]
        },
        "FunctionRuntimeName": {},
        "FunctionRuntimeVersion": {
            "image": [
                290
            ],
            "tag": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "GitHubAccess": {
            "hasAccess": [
                12
            ],
            "isPublic": [
                12
            ],
            "__typename": [
                290
            ]
        },
        "GitHubBranch": {
            "name": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "GitHubRepo": {
            "defaultBranch": [
                290
            ],
            "fullName": [
                290
            ],
            "id": [
                103
            ],
            "installationId": [
                290
            ],
            "isPrivate": [
                12
            ],
            "name": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "GitHubRepoDeployInput": {
            "branch": [
                290
            ],
            "projectId": [
                290
            ],
            "repo": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "GitHubRepoUpdateInput": {
            "environmentId": [
                290
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "GitHubRepoWithoutInstallation": {
            "defaultBranch": [
                290
            ],
            "fullName": [
                290
            ],
            "id": [
                103
            ],
            "isPrivate": [
                12
            ],
            "name": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "HerokuApp": {
            "id": [
                290
            ],
            "name": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "HerokuImportVariablesInput": {
            "environmentId": [
                290
            ],
            "herokuAppId": [
                290
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "HttpLog": {
            "clientUa": [
                290
            ],
            "deploymentId": [
                290
            ],
            "deploymentInstanceId": [
                290
            ],
            "downstreamProto": [
                290
            ],
            "edgeRegion": [
                290
            ],
            "host": [
                290
            ],
            "httpStatus": [
                103
            ],
            "method": [
                290
            ],
            "path": [
                290
            ],
            "requestId": [
                290
            ],
            "responseDetails": [
                290
            ],
            "rxBytes": [
                103
            ],
            "srcIp": [
                290
            ],
            "timestamp": [
                290
            ],
            "totalDuration": [
                103
            ],
            "txBytes": [
                103
            ],
            "upstreamAddress": [
                290
            ],
            "upstreamProto": [
                290
            ],
            "upstreamRqDuration": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "ID": {},
        "Incident": {
            "id": [
                290
            ],
            "message": [
                290
            ],
            "status": [
                102
            ],
            "url": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "IncidentStatus": {},
        "Int": {},
        "Integration": {
            "config": [
                111
            ],
            "id": [
                100
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "IntegrationAuth": {
            "id": [
                100
            ],
            "integrations": [
                106,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "provider": [
                290
            ],
            "providerId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "IntegrationAuthIntegrationsConnection": {
            "edges": [
                107
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "IntegrationAuthIntegrationsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                104
            ],
            "__typename": [
                290
            ]
        },
        "IntegrationCreateInput": {
            "config": [
                111
            ],
            "integrationAuthId": [
                290
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "IntegrationUpdateInput": {
            "config": [
                111
            ],
            "integrationAuthId": [
                290
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "InviteCode": {
            "code": [
                290
            ],
            "createdAt": [
                35
            ],
            "id": [
                100
            ],
            "project": [
                161
            ],
            "projectId": [
                290
            ],
            "role": [
                185
            ],
            "__typename": [
                290
            ]
        },
        "JSON": {},
        "JobApplicationCreateInput": {
            "email": [
                290
            ],
            "jobId": [
                290
            ],
            "name": [
                290
            ],
            "why": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "KeyType": {},
        "Log": {
            "attributes": [
                115
            ],
            "message": [
                290
            ],
            "severity": [
                290
            ],
            "tags": [
                116
            ],
            "timestamp": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "LogAttribute": {
            "key": [
                290
            ],
            "value": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "LogTags": {
            "deploymentId": [
                290
            ],
            "deploymentInstanceId": [
                290
            ],
            "environmentId": [
                290
            ],
            "pluginId": [
                290
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "snapshotId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "LoginSessionAuthInput": {
            "code": [
                290
            ],
            "hostname": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Maintenance": {
            "id": [
                290
            ],
            "message": [
                290
            ],
            "status": [
                119
            ],
            "url": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "MaintenanceStatus": {},
        "Metric": {
            "ts": [
                103
            ],
            "value": [
                87
            ],
            "__typename": [
                290
            ]
        },
        "MetricMeasurement": {},
        "MetricTag": {},
        "MetricTags": {
            "deploymentId": [
                290
            ],
            "environmentId": [
                290
            ],
            "pluginId": [
                290
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "volumeId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "MetricsResult": {
            "measurement": [
                121
            ],
            "tags": [
                123
            ],
            "values": [
                120
            ],
            "__typename": [
                290
            ]
        },
        "Mutation": {
            "apiTokenCreate": [
                290,
                {
                    "input": [
                        7,
                        "ApiTokenCreateInput!"
                    ]
                }
            ],
            "apiTokenDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "baseEnvironmentOverride": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        9,
                        "BaseEnvironmentOverrideInput!"
                    ]
                }
            ],
            "customDomainCreate": [
                23,
                {
                    "input": [
                        24,
                        "CustomDomainCreateInput!"
                    ]
                }
            ],
            "customDomainDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "customDomainUpdate": [
                12,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "id": [
                        290,
                        "String!"
                    ],
                    "targetPort": [
                        103
                    ]
                }
            ],
            "customerCreateFreePlanSubscription": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "customerTogglePayoutsToCredits": [
                12,
                {
                    "customerId": [
                        290,
                        "String!"
                    ],
                    "input": [
                        397,
                        "customerTogglePayoutsToCreditsInput!"
                    ]
                }
            ],
            "deploymentApprove": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deploymentCancel": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deploymentInstanceExecutionCreate": [
                12,
                {
                    "input": [
                        42,
                        "DeploymentInstanceExecutionCreateInput!"
                    ]
                }
            ],
            "deploymentRedeploy": [
                36,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "usePreviousImageTag": [
                        12
                    ]
                }
            ],
            "deploymentRemove": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deploymentRestart": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deploymentRollback": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deploymentStop": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerCreate": [
                52,
                {
                    "input": [
                        53,
                        "DeploymentTriggerCreateInput!"
                    ]
                }
            ],
            "deploymentTriggerDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerUpdate": [
                52,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        54,
                        "DeploymentTriggerUpdateInput!"
                    ]
                }
            ],
            "dockerComposeImport": [
                56,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ],
                    "skipStagingPatch": [
                        12
                    ],
                    "yaml": [
                        290,
                        "String!"
                    ]
                }
            ],
            "egressGatewayAssociationCreate": [
                60,
                {
                    "input": [
                        61,
                        "EgressGatewayCreateInput!"
                    ]
                }
            ],
            "egressGatewayAssociationsClear": [
                12,
                {
                    "input": [
                        62,
                        "EgressGatewayServiceTargetInput!"
                    ]
                }
            ],
            "emailChangeConfirm": [
                12,
                {
                    "nonce": [
                        290,
                        "String!"
                    ]
                }
            ],
            "emailChangeInitiate": [
                12,
                {
                    "newEmail": [
                        290,
                        "String!"
                    ]
                }
            ],
            "environmentCreate": [
                63,
                {
                    "input": [
                        65,
                        "EnvironmentCreateInput!"
                    ]
                }
            ],
            "environmentDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "environmentPatchCommit": [
                290,
                {
                    "commitMessage": [
                        290
                    ],
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "patch": [
                        64
                    ]
                }
            ],
            "environmentRename": [
                63,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        71,
                        "EnvironmentRenameInput!"
                    ]
                }
            ],
            "environmentTriggersDeploy": [
                12,
                {
                    "input": [
                        74,
                        "EnvironmentTriggersDeployInput!"
                    ]
                }
            ],
            "fairUseAgree": [
                12,
                {
                    "agree": [
                        12,
                        "Boolean!"
                    ]
                }
            ],
            "featureFlagAdd": [
                12,
                {
                    "input": [
                        86,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "featureFlagRemove": [
                12,
                {
                    "input": [
                        86,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "githubRepoDeploy": [
                12,
                {
                    "input": [
                        94,
                        "GitHubRepoDeployInput!"
                    ]
                }
            ],
            "githubRepoUpdate": [
                12,
                {
                    "input": [
                        95,
                        "GitHubRepoUpdateInput!"
                    ]
                }
            ],
            "herokuImportVariables": [
                103,
                {
                    "input": [
                        98,
                        "HerokuImportVariablesInput!"
                    ]
                }
            ],
            "integrationCreate": [
                104,
                {
                    "input": [
                        108,
                        "IntegrationCreateInput!"
                    ]
                }
            ],
            "integrationDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "integrationUpdate": [
                104,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        109,
                        "IntegrationUpdateInput!"
                    ]
                }
            ],
            "inviteCodeUse": [
                161,
                {
                    "code": [
                        290,
                        "String!"
                    ]
                }
            ],
            "jobApplicationCreate": [
                12,
                {
                    "input": [
                        112,
                        "JobApplicationCreateInput!"
                    ],
                    "resume": [
                        341,
                        "Upload!"
                    ]
                }
            ],
            "loginSessionAuth": [
                12,
                {
                    "input": [
                        117,
                        "LoginSessionAuthInput!"
                    ]
                }
            ],
            "loginSessionCancel": [
                12,
                {
                    "code": [
                        290,
                        "String!"
                    ]
                }
            ],
            "loginSessionConsume": [
                290,
                {
                    "code": [
                        290,
                        "String!"
                    ]
                }
            ],
            "loginSessionCreate": [
                290
            ],
            "loginSessionVerify": [
                12,
                {
                    "code": [
                        290,
                        "String!"
                    ]
                }
            ],
            "logout": [
                12
            ],
            "observabilityDashboardCreate": [
                12,
                {
                    "input": [
                        128,
                        "ObservabilityDashboardCreateInput!"
                    ]
                }
            ],
            "observabilityDashboardReset": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "observabilityDashboardUpdate": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        135,
                        "[ObservabilityDashboardUpdateInput!]!"
                    ]
                }
            ],
            "pluginCreate": [
                142,
                {
                    "input": [
                        145,
                        "PluginCreateInput!"
                    ]
                }
            ],
            "pluginDelete": [
                12,
                {
                    "environmentId": [
                        290
                    ],
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "pluginReset": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        260,
                        "ResetPluginInput!"
                    ]
                }
            ],
            "pluginResetCredentials": [
                290,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        259,
                        "ResetPluginCredentialsInput!"
                    ]
                }
            ],
            "pluginRestart": [
                142,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        146,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginStart": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        146,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginUpdate": [
                142,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        149,
                        "PluginUpdateInput!"
                    ]
                }
            ],
            "preferenceOverridesCreateUpdate": [
                12,
                {
                    "input": [
                        153,
                        "PreferenceOverridesCreateUpdateData!"
                    ]
                }
            ],
            "preferenceOverridesDestroyForResource": [
                12,
                {
                    "input": [
                        154,
                        "PreferenceOverridesDestroyData!"
                    ]
                }
            ],
            "preferencesUpdate": [
                155,
                {
                    "input": [
                        156,
                        "PreferencesUpdateData!"
                    ]
                }
            ],
            "privateNetworkCreateOrGet": [
                157,
                {
                    "input": [
                        158,
                        "PrivateNetworkCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointCreateOrGet": [
                159,
                {
                    "input": [
                        160,
                        "PrivateNetworkEndpointCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointRename": [
                12,
                {
                    "dnsName": [
                        290,
                        "String!"
                    ],
                    "id": [
                        290,
                        "String!"
                    ],
                    "privateNetworkId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "privateNetworksForEnvironmentDelete": [
                12,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectClaim": [
                161,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "workspaceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectCreate": [
                161,
                {
                    "input": [
                        162,
                        "ProjectCreateInput!"
                    ]
                }
            ],
            "projectDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectInvitationAccept": [
                179,
                {
                    "code": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectInvitationCreate": [
                172,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        175,
                        "ProjectInvitee!"
                    ]
                }
            ],
            "projectInvitationDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectInvitationResend": [
                172,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectInviteUser": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        174,
                        "ProjectInviteUserInput!"
                    ]
                }
            ],
            "projectLeave": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectMemberRemove": [
                176,
                {
                    "input": [
                        177,
                        "ProjectMemberRemoveInput!"
                    ]
                }
            ],
            "projectMemberUpdate": [
                176,
                {
                    "input": [
                        178,
                        "ProjectMemberUpdateInput!"
                    ]
                }
            ],
            "projectScheduleDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectScheduleDeleteCancel": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectScheduleDeleteForce": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectTokenCreate": [
                290,
                {
                    "input": [
                        189,
                        "ProjectTokenCreateInput!"
                    ]
                }
            ],
            "projectTokenDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectTransferConfirm": [
                12,
                {
                    "input": [
                        190,
                        "ProjectTransferConfirmInput!"
                    ]
                }
            ],
            "projectTransferInitiate": [
                12,
                {
                    "input": [
                        191,
                        "ProjectTransferInitiateInput!"
                    ]
                }
            ],
            "projectTransferToTeam": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        192,
                        "ProjectTransferToTeamInput!"
                    ]
                }
            ],
            "projectUpdate": [
                161,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        193,
                        "ProjectUpdateInput!"
                    ]
                }
            ],
            "providerAuthRemove": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "recoveryCodeGenerate": [
                246
            ],
            "recoveryCodeValidate": [
                12,
                {
                    "input": [
                        245,
                        "RecoveryCodeValidateInput!"
                    ]
                }
            ],
            "referralInfoUpdate": [
                247,
                {
                    "input": [
                        248,
                        "ReferralInfoUpdateInput!"
                    ]
                }
            ],
            "sendCommunityThreadNotificationEmail": [
                12,
                {
                    "input": [
                        264,
                        "SendCommunityThreadNotificationEmailInput!"
                    ]
                }
            ],
            "serviceConnect": [
                266,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        267,
                        "ServiceConnectInput!"
                    ]
                }
            ],
            "serviceCreate": [
                266,
                {
                    "input": [
                        268,
                        "ServiceCreateInput!"
                    ]
                }
            ],
            "serviceDelete": [
                12,
                {
                    "environmentId": [
                        290
                    ],
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceDisconnect": [
                266,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceDomainCreate": [
                271,
                {
                    "input": [
                        272,
                        "ServiceDomainCreateInput!"
                    ]
                }
            ],
            "serviceDomainDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceDomainUpdate": [
                12,
                {
                    "input": [
                        273,
                        "ServiceDomainUpdateInput!"
                    ]
                }
            ],
            "serviceDuplicate": [
                266,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceFeatureFlagAdd": [
                12,
                {
                    "input": [
                        274,
                        "ServiceFeatureFlagToggleInput!"
                    ]
                }
            ],
            "serviceFeatureFlagRemove": [
                12,
                {
                    "input": [
                        274,
                        "ServiceFeatureFlagToggleInput!"
                    ]
                }
            ],
            "serviceInstanceDeploy": [
                12,
                {
                    "commitSha": [
                        290
                    ],
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "latestCommit": [
                        12
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceDeployV2": [
                290,
                {
                    "commitSha": [
                        290
                    ],
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimitsUpdate": [
                12,
                {
                    "input": [
                        277,
                        "ServiceInstanceLimitsUpdateInput!"
                    ]
                }
            ],
            "serviceInstanceRedeploy": [
                12,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceUpdate": [
                12,
                {
                    "environmentId": [
                        290
                    ],
                    "input": [
                        278,
                        "ServiceInstanceUpdateInput!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceRemoveUpstreamUrl": [
                266,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceUpdate": [
                266,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        285,
                        "ServiceUpdateInput!"
                    ]
                }
            ],
            "sessionDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "sharedVariableConfigure": [
                365,
                {
                    "input": [
                        288,
                        "SharedVariableConfigureInput!"
                    ]
                }
            ],
            "tcpProxyCreate": [
                299,
                {
                    "input": [
                        300,
                        "TCPProxyCreateInput!"
                    ]
                }
            ],
            "tcpProxyDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "teamBulkProjectTransfer": [
                12,
                {
                    "input": [
                        302,
                        "TeamBulkProjectTransferInput!"
                    ]
                }
            ],
            "teamCreateAndSubscribe": [
                304,
                {
                    "input": [
                        303,
                        "TeamCreateAndSubscribeInput!"
                    ]
                }
            ],
            "teamInviteCodeCreate": [
                290,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        305,
                        "TeamInviteCodeCreateInput!"
                    ]
                }
            ],
            "teamInviteCodeUse": [
                301,
                {
                    "code": [
                        290,
                        "String!"
                    ]
                }
            ],
            "teamLeave": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "teamPermissionChange": [
                12,
                {
                    "input": [
                        308,
                        "TeamPermissionChangeInput!"
                    ]
                }
            ],
            "teamTrustedDomainCreate": [
                12,
                {
                    "input": [
                        313,
                        "TeamTrustedDomainCreateInput!"
                    ]
                }
            ],
            "teamTrustedDomainDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "teamUserInvite": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        314,
                        "TeamUserInviteInput!"
                    ]
                }
            ],
            "teamUserRemove": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        315,
                        "TeamUserRemoveInput!"
                    ]
                }
            ],
            "templateClone": [
                316,
                {
                    "input": [
                        317,
                        "TemplateCloneInput!"
                    ]
                }
            ],
            "templateDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        320,
                        "TemplateDeleteInput!"
                    ]
                }
            ],
            "templateDeploy": [
                322,
                {
                    "input": [
                        321,
                        "TemplateDeployInput!"
                    ]
                }
            ],
            "templateDeployV2": [
                322,
                {
                    "input": [
                        324,
                        "TemplateDeployV2Input!"
                    ]
                }
            ],
            "templateGenerate": [
                316,
                {
                    "input": [
                        325,
                        "TemplateGenerateInput!"
                    ]
                }
            ],
            "templateMaybeUnsetCommunityThreadSlug": [
                12,
                {
                    "communityThreadSlug": [
                        290,
                        "String!"
                    ]
                }
            ],
            "templatePublish": [
                316,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        328,
                        "TemplatePublishInput!"
                    ]
                }
            ],
            "templateServiceSourceEject": [
                12,
                {
                    "input": [
                        331,
                        "TemplateServiceSourceEjectInput!"
                    ]
                }
            ],
            "templateUnpublish": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "twoFactorInfoCreate": [
                246,
                {
                    "input": [
                        338,
                        "TwoFactorInfoCreateInput!"
                    ]
                }
            ],
            "twoFactorInfoDelete": [
                12
            ],
            "twoFactorInfoSecret": [
                339
            ],
            "twoFactorInfoValidate": [
                12,
                {
                    "input": [
                        340,
                        "TwoFactorInfoValidateInput!"
                    ]
                }
            ],
            "upsertSlackChannelForTeam": [
                12,
                {
                    "teamId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "usageLimitRemove": [
                12,
                {
                    "input": [
                        346,
                        "UsageLimitRemoveInput!"
                    ]
                }
            ],
            "usageLimitSet": [
                12,
                {
                    "input": [
                        347,
                        "UsageLimitSetInput!"
                    ]
                }
            ],
            "userBetaLeave": [
                12
            ],
            "userDelete": [
                12
            ],
            "userDiscordDisconnect": [
                12
            ],
            "userFlagsRemove": [
                12,
                {
                    "input": [
                        350,
                        "UserFlagsRemoveInput!"
                    ]
                }
            ],
            "userFlagsSet": [
                12,
                {
                    "input": [
                        351,
                        "UserFlagsSetInput!"
                    ]
                }
            ],
            "userProfileUpdate": [
                12,
                {
                    "input": [
                        357,
                        "UserProfileUpdateInput!"
                    ]
                }
            ],
            "userSlackDisconnect": [
                12
            ],
            "userTermsUpdate": [
                348
            ],
            "userUpdate": [
                348,
                {
                    "input": [
                        364,
                        "UserUpdateInput!"
                    ]
                }
            ],
            "variableCollectionUpsert": [
                12,
                {
                    "input": [
                        366,
                        "VariableCollectionUpsertInput!"
                    ]
                }
            ],
            "variableDelete": [
                12,
                {
                    "input": [
                        367,
                        "VariableDeleteInput!"
                    ]
                }
            ],
            "variableUpsert": [
                12,
                {
                    "input": [
                        368,
                        "VariableUpsertInput!"
                    ]
                }
            ],
            "volumeCreate": [
                372,
                {
                    "input": [
                        373,
                        "VolumeCreateInput!"
                    ]
                }
            ],
            "volumeDelete": [
                12,
                {
                    "volumeId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupCreate": [
                392,
                {
                    "volumeInstanceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupDelete": [
                392,
                {
                    "volumeInstanceBackupId": [
                        290,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupLock": [
                12,
                {
                    "volumeInstanceBackupId": [
                        290,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupRestore": [
                392,
                {
                    "volumeInstanceBackupId": [
                        290,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupScheduleUpdate": [
                12,
                {
                    "kinds": [
                        377,
                        "[VolumeInstanceBackupScheduleKind!]!"
                    ],
                    "volumeInstanceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceUpdate": [
                12,
                {
                    "environmentId": [
                        290
                    ],
                    "input": [
                        379,
                        "VolumeInstanceUpdateInput!"
                    ],
                    "volumeId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "volumeUpdate": [
                372,
                {
                    "input": [
                        383,
                        "VolumeUpdateInput!"
                    ],
                    "volumeId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "webhookCreate": [
                197,
                {
                    "input": [
                        386,
                        "WebhookCreateInput!"
                    ]
                }
            ],
            "webhookDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "webhookUpdate": [
                197,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        387,
                        "WebhookUpdateInput!"
                    ]
                }
            ],
            "workspaceDelete": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "workspaceLeave": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "workspaceUpdate": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "input": [
                        396,
                        "WorkspaceUpdateInput!"
                    ]
                }
            ],
            "workspaceUpsertSlackChannel": [
                12,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                290
            ]
        },
        "Node": {
            "id": [
                100
            ],
            "on_AdoptionInfo": [
                3
            ],
            "on_ApiToken": [
                6
            ],
            "on_BanReasonHistory": [
                8
            ],
            "on_Container": [
                20
            ],
            "on_Credit": [
                21
            ],
            "on_Customer": [
                26
            ],
            "on_Deployment": [
                36
            ],
            "on_DeploymentEvent": [
                38
            ],
            "on_DeploymentInstanceExecution": [
                41
            ],
            "on_DeploymentSnapshot": [
                48
            ],
            "on_DeploymentTrigger": [
                52
            ],
            "on_Environment": [
                63
            ],
            "on_Event": [
                81
            ],
            "on_Integration": [
                104
            ],
            "on_IntegrationAuth": [
                105
            ],
            "on_InviteCode": [
                110
            ],
            "on_ObservabilityDashboard": [
                127
            ],
            "on_ObservabilityDashboardItem": [
                129
            ],
            "on_ObservabilityDashboardItemInstance": [
                133
            ],
            "on_PlanLimitOverride": [
                140
            ],
            "on_Plugin": [
                142
            ],
            "on_PreferenceOverride": [
                152
            ],
            "on_Preferences": [
                155
            ],
            "on_Project": [
                161
            ],
            "on_ProjectPermission": [
                179
            ],
            "on_ProjectToken": [
                188
            ],
            "on_ProjectWebhook": [
                197
            ],
            "on_ProviderAuth": [
                200
            ],
            "on_ReferralInfo": [
                247
            ],
            "on_RefundRequest": [
                252
            ],
            "on_Service": [
                266
            ],
            "on_ServiceInstance": [
                275
            ],
            "on_Session": [
                286
            ],
            "on_Team": [
                301
            ],
            "on_TeamPermission": [
                307
            ],
            "on_TeamTrustedDomain": [
                312
            ],
            "on_Template": [
                316
            ],
            "on_TemplateService": [
                329
            ],
            "on_UsageAnomaly": [
                342
            ],
            "on_UsageLimit": [
                345
            ],
            "on_User": [
                348
            ],
            "on_Variable": [
                365
            ],
            "on_Volume": [
                372
            ],
            "on_VolumeInstance": [
                374
            ],
            "on_VolumeInstanceBackupSchedule": [
                376
            ],
            "on_Withdrawal": [
                388
            ],
            "on_WithdrawalAccount": [
                389
            ],
            "on_Workspace": [
                395
            ],
            "__typename": [
                290
            ]
        },
        "ObservabilityDashboard": {
            "id": [
                100
            ],
            "items": [
                133
            ],
            "__typename": [
                290
            ]
        },
        "ObservabilityDashboardCreateInput": {
            "environmentId": [
                290
            ],
            "items": [
                135
            ],
            "__typename": [
                290
            ]
        },
        "ObservabilityDashboardItem": {
            "config": [
                130
            ],
            "description": [
                290
            ],
            "id": [
                100
            ],
            "name": [
                290
            ],
            "type": [
                134
            ],
            "__typename": [
                290
            ]
        },
        "ObservabilityDashboardItemConfig": {
            "logsFilter": [
                290
            ],
            "measurements": [
                121
            ],
            "projectUsageProperties": [
                194
            ],
            "resourceIds": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ObservabilityDashboardItemConfigInput": {
            "logsFilter": [
                290
            ],
            "measurements": [
                121
            ],
            "projectUsageProperties": [
                194
            ],
            "resourceIds": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ObservabilityDashboardItemCreateInput": {
            "config": [
                131
            ],
            "description": [
                290
            ],
            "id": [
                290
            ],
            "name": [
                290
            ],
            "type": [
                134
            ],
            "__typename": [
                290
            ]
        },
        "ObservabilityDashboardItemInstance": {
            "dashboardItem": [
                129
            ],
            "displayConfig": [
                55
            ],
            "id": [
                100
            ],
            "__typename": [
                290
            ]
        },
        "ObservabilityDashboardItemType": {},
        "ObservabilityDashboardUpdateInput": {
            "dashboardItem": [
                132
            ],
            "displayConfig": [
                55
            ],
            "id": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "OverrideInput": {
            "enabled": [
                12
            ],
            "name": [
                290
            ],
            "resource": [
                290
            ],
            "resourceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PageInfo": {
            "endCursor": [
                290
            ],
            "hasNextPage": [
                12
            ],
            "hasPreviousPage": [
                12
            ],
            "startCursor": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PaymentMethod": {
            "card": [
                139
            ],
            "id": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PaymentMethodCard": {
            "brand": [
                290
            ],
            "country": [
                290
            ],
            "last4": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PlanLimitOverride": {
            "config": [
                295
            ],
            "id": [
                100
            ],
            "__typename": [
                290
            ]
        },
        "PlatformStatus": {
            "incident": [
                101
            ],
            "isStable": [
                12
            ],
            "maintenance": [
                118
            ],
            "__typename": [
                290
            ]
        },
        "Plugin": {
            "containers": [
                143,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "deprecatedAt": [
                35
            ],
            "friendlyName": [
                290
            ],
            "id": [
                100
            ],
            "logsEnabled": [
                12
            ],
            "migrationDatabaseServiceId": [
                290
            ],
            "name": [
                148
            ],
            "project": [
                161
            ],
            "status": [
                147
            ],
            "variables": [
                150,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "__typename": [
                290
            ]
        },
        "PluginContainersConnection": {
            "edges": [
                144
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "PluginContainersConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                20
            ],
            "__typename": [
                290
            ]
        },
        "PluginCreateInput": {
            "environmentId": [
                290
            ],
            "friendlyName": [
                290
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PluginRestartInput": {
            "environmentId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PluginStatus": {},
        "PluginType": {},
        "PluginUpdateInput": {
            "friendlyName": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PluginVariablesConnection": {
            "edges": [
                151
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "PluginVariablesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                365
            ],
            "__typename": [
                290
            ]
        },
        "PreferenceOverride": {
            "enabled": [
                12
            ],
            "id": [
                100
            ],
            "name": [
                290
            ],
            "resource": [
                290
            ],
            "resourceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PreferenceOverridesCreateUpdateData": {
            "overrides": [
                136
            ],
            "__typename": [
                290
            ]
        },
        "PreferenceOverridesDestroyData": {
            "resource": [
                290
            ],
            "resourceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Preferences": {
            "buildFailedEmail": [
                12
            ],
            "changelogEmail": [
                12
            ],
            "communityEmail": [
                12
            ],
            "deployCrashedEmail": [
                12
            ],
            "ephemeralEnvironmentEmail": [
                12
            ],
            "id": [
                100
            ],
            "marketingEmail": [
                12
            ],
            "preferenceOverrides": [
                152
            ],
            "subprocessorUpdatesEmail": [
                12
            ],
            "usageEmail": [
                12
            ],
            "__typename": [
                290
            ]
        },
        "PreferencesUpdateData": {
            "buildFailedEmail": [
                12
            ],
            "changelogEmail": [
                12
            ],
            "communityEmail": [
                12
            ],
            "deployCrashedEmail": [
                12
            ],
            "ephemeralEnvironmentEmail": [
                12
            ],
            "marketingEmail": [
                12
            ],
            "subprocessorUpdatesEmail": [
                12
            ],
            "token": [
                290
            ],
            "usageEmail": [
                12
            ],
            "__typename": [
                290
            ]
        },
        "PrivateNetwork": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "dnsName": [
                290
            ],
            "environmentId": [
                290
            ],
            "name": [
                290
            ],
            "networkId": [
                10
            ],
            "projectId": [
                290
            ],
            "publicId": [
                290
            ],
            "tags": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PrivateNetworkCreateOrGetInput": {
            "environmentId": [
                290
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "tags": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PrivateNetworkEndpoint": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "dnsName": [
                290
            ],
            "privateIps": [
                290
            ],
            "publicId": [
                290
            ],
            "serviceInstanceId": [
                290
            ],
            "tags": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PrivateNetworkEndpointCreateOrGetInput": {
            "environmentId": [
                290
            ],
            "privateNetworkId": [
                290
            ],
            "serviceId": [
                290
            ],
            "serviceName": [
                290
            ],
            "tags": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Project": {
            "baseEnvironment": [
                63
            ],
            "baseEnvironmentId": [
                290
            ],
            "botPrEnvironments": [
                12
            ],
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "deploymentTriggers": [
                164,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "deployments": [
                166,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "description": [
                290
            ],
            "environments": [
                168,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "expiredAt": [
                35
            ],
            "groups": [
                170,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "id": [
                100
            ],
            "isPublic": [
                12
            ],
            "isTempProject": [
                12
            ],
            "members": [
                176
            ],
            "name": [
                290
            ],
            "plugins": [
                180,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "prDeploys": [
                12
            ],
            "prEnvCopyVolData": [
                12
            ],
            "projectPermissions": [
                182,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "services": [
                186,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "subscriptionPlanLimit": [
                295
            ],
            "subscriptionType": [
                296
            ],
            "team": [
                301
            ],
            "teamId": [
                290
            ],
            "updatedAt": [
                35
            ],
            "volumes": [
                195,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "webhooks": [
                198,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "__typename": [
                290
            ]
        },
        "ProjectCreateInput": {
            "defaultEnvironmentName": [
                290
            ],
            "description": [
                290
            ],
            "isPublic": [
                12
            ],
            "name": [
                290
            ],
            "plugins": [
                290
            ],
            "prDeploys": [
                12
            ],
            "repo": [
                163
            ],
            "runtime": [
                203
            ],
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectCreateRepo": {
            "branch": [
                290
            ],
            "fullRepoName": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectDeploymentTriggersConnection": {
            "edges": [
                165
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ProjectDeploymentTriggersConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                52
            ],
            "__typename": [
                290
            ]
        },
        "ProjectDeploymentsConnection": {
            "edges": [
                167
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ProjectDeploymentsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                36
            ],
            "__typename": [
                290
            ]
        },
        "ProjectEnvironmentsConnection": {
            "edges": [
                169
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ProjectEnvironmentsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                63
            ],
            "__typename": [
                290
            ]
        },
        "ProjectGroupsConnection": {
            "edges": [
                171
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ProjectGroupsConnectionEdge": {
            "cursor": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectInvitation": {
            "email": [
                290
            ],
            "expiresAt": [
                35
            ],
            "id": [
                100
            ],
            "inviter": [
                173
            ],
            "isExpired": [
                12
            ],
            "project": [
                201
            ],
            "__typename": [
                290
            ]
        },
        "ProjectInvitationInviter": {
            "email": [
                290
            ],
            "name": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectInviteUserInput": {
            "email": [
                290
            ],
            "link": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectInvitee": {
            "email": [
                290
            ],
            "role": [
                185
            ],
            "__typename": [
                290
            ]
        },
        "ProjectMember": {
            "avatar": [
                290
            ],
            "email": [
                290
            ],
            "id": [
                290
            ],
            "name": [
                290
            ],
            "role": [
                185
            ],
            "__typename": [
                290
            ]
        },
        "ProjectMemberRemoveInput": {
            "projectId": [
                290
            ],
            "userId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectMemberUpdateInput": {
            "projectId": [
                290
            ],
            "role": [
                185
            ],
            "userId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectPermission": {
            "id": [
                100
            ],
            "projectId": [
                290
            ],
            "role": [
                185
            ],
            "userId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectPluginsConnection": {
            "edges": [
                181
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ProjectPluginsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                142
            ],
            "__typename": [
                290
            ]
        },
        "ProjectProjectPermissionsConnection": {
            "edges": [
                183
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ProjectProjectPermissionsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                179
            ],
            "__typename": [
                290
            ]
        },
        "ProjectResourceAccess": {
            "customDomain": [
                0
            ],
            "databaseDeployment": [
                0
            ],
            "deployment": [
                0
            ],
            "environment": [
                0
            ],
            "plugin": [
                0
            ],
            "__typename": [
                290
            ]
        },
        "ProjectRole": {},
        "ProjectServicesConnection": {
            "edges": [
                187
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ProjectServicesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                266
            ],
            "__typename": [
                290
            ]
        },
        "ProjectToken": {
            "createdAt": [
                35
            ],
            "displayToken": [
                290
            ],
            "environment": [
                63
            ],
            "environmentId": [
                290
            ],
            "id": [
                100
            ],
            "name": [
                290
            ],
            "project": [
                161
            ],
            "projectId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectTokenCreateInput": {
            "environmentId": [
                290
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectTransferConfirmInput": {
            "destinationWorkspaceId": [
                290
            ],
            "ownershipTransferId": [
                290
            ],
            "projectId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectTransferInitiateInput": {
            "memberId": [
                290
            ],
            "projectId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectTransferToTeamInput": {
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectUpdateInput": {
            "baseEnvironmentId": [
                290
            ],
            "botPrEnvironments": [
                12
            ],
            "description": [
                290
            ],
            "isPublic": [
                12
            ],
            "name": [
                290
            ],
            "prDeploys": [
                12
            ],
            "prEnvCopyVolData": [
                12
            ],
            "__typename": [
                290
            ]
        },
        "ProjectUsageProperty": {},
        "ProjectVolumesConnection": {
            "edges": [
                196
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ProjectVolumesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                372
            ],
            "__typename": [
                290
            ]
        },
        "ProjectWebhook": {
            "filters": [
                290
            ],
            "id": [
                100
            ],
            "lastStatus": [
                103
            ],
            "projectId": [
                290
            ],
            "url": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ProjectWebhooksConnection": {
            "edges": [
                199
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ProjectWebhooksConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                197
            ],
            "__typename": [
                290
            ]
        },
        "ProviderAuth": {
            "email": [
                290
            ],
            "id": [
                100
            ],
            "metadata": [
                111
            ],
            "provider": [
                290
            ],
            "userId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PublicProjectInformation": {
            "id": [
                100
            ],
            "name": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "PublicProjectInvitation": {
            "on_InviteCode": [
                110
            ],
            "on_ProjectInvitation": [
                172
            ],
            "on_Node": [
                126
            ],
            "__typename": [
                290
            ]
        },
        "PublicRuntime": {},
        "PublicStats": {
            "totalDeploymentsLastMonth": [
                103
            ],
            "totalLogsLastMonth": [
                10
            ],
            "totalProjects": [
                103
            ],
            "totalRequestsLastMonth": [
                10
            ],
            "totalServices": [
                103
            ],
            "totalUsers": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "Query": {
            "adminVolumeInstancesForVolume": [
                374,
                {
                    "volumeId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "apiTokens": [
                206,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "buildLogs": [
                114,
                {
                    "deploymentId": [
                        290,
                        "String!"
                    ],
                    "endDate": [
                        35
                    ],
                    "filter": [
                        290
                    ],
                    "limit": [
                        103
                    ],
                    "startDate": [
                        35
                    ]
                }
            ],
            "changelogBlockImage": [
                290,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "customDomain": [
                23,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "customDomainAvailable": [
                58,
                {
                    "domain": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deployment": [
                36,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deploymentEvents": [
                208,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "id": [
                        290,
                        "String!"
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "deploymentInstanceExecutions": [
                210,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "input": [
                        44,
                        "DeploymentInstanceExecutionListInput!"
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "deploymentLogs": [
                114,
                {
                    "deploymentId": [
                        290,
                        "String!"
                    ],
                    "endDate": [
                        35
                    ],
                    "filter": [
                        290
                    ],
                    "limit": [
                        103
                    ],
                    "startDate": [
                        35
                    ]
                }
            ],
            "deploymentSnapshot": [
                48,
                {
                    "deploymentId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggers": [
                212,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deployments": [
                214,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "input": [
                        46,
                        "DeploymentListInput!"
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "domainStatus": [
                59,
                {
                    "id": [
                        290,
                        "String!"
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "domains": [
                5,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "egressGateways": [
                60,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "environment": [
                63,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "environmentLogs": [
                114,
                {
                    "afterDate": [
                        290
                    ],
                    "afterLimit": [
                        103
                    ],
                    "anchorDate": [
                        290
                    ],
                    "beforeDate": [
                        290
                    ],
                    "beforeLimit": [
                        103
                    ],
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "filter": [
                        290
                    ]
                }
            ],
            "environmentPatches": [
                216,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "environments": [
                218,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "isEphemeral": [
                        12
                    ],
                    "last": [
                        103
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "estimatedUsage": [
                80,
                {
                    "includeDeleted": [
                        12
                    ],
                    "measurements": [
                        121,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        290
                    ],
                    "teamId": [
                        290
                    ]
                }
            ],
            "events": [
                220,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "environmentId": [
                        290
                    ],
                    "filter": [
                        82
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "externalWorkspaces": [
                85,
                {
                    "projectId": [
                        290
                    ]
                }
            ],
            "functionRuntime": [
                88,
                {
                    "name": [
                        89,
                        "FunctionRuntimeName!"
                    ]
                }
            ],
            "functionRuntimes": [
                88
            ],
            "gitHubRepoAccessAvailable": [
                91,
                {
                    "fullRepoName": [
                        290,
                        "String!"
                    ]
                }
            ],
            "githubIsRepoNameAvailable": [
                12,
                {
                    "fullRepoName": [
                        290,
                        "String!"
                    ]
                }
            ],
            "githubRepo": [
                96,
                {
                    "fullRepoName": [
                        290,
                        "String!"
                    ]
                }
            ],
            "githubRepoBranches": [
                92,
                {
                    "owner": [
                        290,
                        "String!"
                    ],
                    "repo": [
                        290,
                        "String!"
                    ]
                }
            ],
            "githubRepos": [
                93
            ],
            "githubWritableScopes": [
                290
            ],
            "herokuApps": [
                97
            ],
            "httpLogs": [
                99,
                {
                    "afterDate": [
                        290
                    ],
                    "afterLimit": [
                        103
                    ],
                    "anchorDate": [
                        290
                    ],
                    "beforeDate": [
                        290
                    ],
                    "beforeLimit": [
                        103
                    ],
                    "deploymentId": [
                        290,
                        "String!"
                    ],
                    "endDate": [
                        290
                    ],
                    "filter": [
                        290
                    ],
                    "limit": [
                        103
                    ],
                    "startDate": [
                        290
                    ]
                }
            ],
            "integrationAuth": [
                105,
                {
                    "provider": [
                        290,
                        "String!"
                    ],
                    "providerId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "integrationAuths": [
                222,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "integrations": [
                224,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "inviteCode": [
                110,
                {
                    "code": [
                        290,
                        "String!"
                    ]
                }
            ],
            "me": [
                348
            ],
            "metrics": [
                124,
                {
                    "averagingWindowSeconds": [
                        103
                    ],
                    "endDate": [
                        35
                    ],
                    "environmentId": [
                        290
                    ],
                    "groupBy": [
                        122,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        12
                    ],
                    "measurements": [
                        121,
                        "[MetricMeasurement!]!"
                    ],
                    "pluginId": [
                        290
                    ],
                    "projectId": [
                        290
                    ],
                    "sampleRateSeconds": [
                        103
                    ],
                    "serviceId": [
                        290
                    ],
                    "startDate": [
                        35,
                        "DateTime!"
                    ],
                    "teamId": [
                        290
                    ],
                    "volumeId": [
                        290
                    ],
                    "workspaceId": [
                        290
                    ]
                }
            ],
            "node": [
                126,
                {
                    "id": [
                        100,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                126,
                {
                    "ids": [
                        100,
                        "[ID!]!"
                    ]
                }
            ],
            "observabilityDashboards": [
                226,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "platformStatus": [
                141
            ],
            "plugin": [
                142,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "pluginLogs": [
                114,
                {
                    "endDate": [
                        35
                    ],
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "filter": [
                        290
                    ],
                    "limit": [
                        103
                    ],
                    "pluginId": [
                        290,
                        "String!"
                    ],
                    "startDate": [
                        35
                    ]
                }
            ],
            "preferences": [
                155,
                {
                    "token": [
                        290
                    ]
                }
            ],
            "privateNetworkEndpoint": [
                159,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "privateNetworkId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointNameAvailable": [
                12,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "prefix": [
                        290,
                        "String!"
                    ],
                    "privateNetworkId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "privateNetworks": [
                157,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "project": [
                161,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectInvitation": [
                202,
                {
                    "code": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectInvitations": [
                172,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectInviteCode": [
                110,
                {
                    "projectId": [
                        290,
                        "String!"
                    ],
                    "role": [
                        185,
                        "ProjectRole!"
                    ]
                }
            ],
            "projectMembers": [
                176,
                {
                    "projectId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectResourceAccess": [
                184,
                {
                    "projectId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projectToken": [
                188
            ],
            "projectTokens": [
                228,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "projects": [
                230,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "includeDeleted": [
                        12
                    ],
                    "last": [
                        103
                    ],
                    "teamId": [
                        290
                    ],
                    "userId": [
                        290
                    ]
                }
            ],
            "publicStats": [
                204
            ],
            "referralInfo": [
                247,
                {
                    "workspaceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "regions": [
                254,
                {
                    "projectId": [
                        290
                    ]
                }
            ],
            "resourceAccess": [
                261,
                {
                    "explicitResourceOwner": [
                        84,
                        "ExplicitOwnerInput!"
                    ]
                }
            ],
            "service": [
                266,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceDomainAvailable": [
                58,
                {
                    "domain": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceInstance": [
                275,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceIsUpdatable": [
                12,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimitOverride": [
                276,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimits": [
                276,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "sessions": [
                232,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "tcpProxies": [
                299,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "team": [
                301,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "teamByCode": [
                301,
                {
                    "code": [
                        290,
                        "String!"
                    ]
                }
            ],
            "teamTemplates": [
                234,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ],
                    "teamId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "teamTrustedDomains": [
                236,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ],
                    "teamId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "template": [
                316,
                {
                    "code": [
                        290
                    ],
                    "owner": [
                        290
                    ],
                    "repo": [
                        290
                    ]
                }
            ],
            "templateSourceForProject": [
                316,
                {
                    "projectId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "templates": [
                238,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ],
                    "recommended": [
                        12
                    ]
                }
            ],
            "templatesCount": [
                103
            ],
            "twoFactorInfo": [
                337
            ],
            "usage": [
                4,
                {
                    "endDate": [
                        35
                    ],
                    "groupBy": [
                        122,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        12
                    ],
                    "measurements": [
                        121,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        290
                    ],
                    "startDate": [
                        35
                    ],
                    "teamId": [
                        290
                    ]
                }
            ],
            "userIdForDiscordId": [
                290,
                {
                    "discordId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "userIdForSlackId": [
                290,
                {
                    "slackId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "userKickbackEarnings": [
                352,
                {
                    "userId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "userProfile": [
                354,
                {
                    "username": [
                        290,
                        "String!"
                    ]
                }
            ],
            "userTemplates": [
                240,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "variables": [
                75,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "pluginId": [
                        290
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290
                    ],
                    "unrendered": [
                        12
                    ]
                }
            ],
            "variablesForServiceDeployment": [
                75,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ],
                    "serviceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "vercelInfo": [
                370
            ],
            "volumeInstance": [
                374,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupList": [
                375,
                {
                    "volumeInstanceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupScheduleList": [
                376,
                {
                    "volumeInstanceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "webhooks": [
                242,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ],
                    "projectId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "workflowStatus": [
                393,
                {
                    "workflowId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "workspace": [
                395,
                {
                    "workspaceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                290
            ]
        },
        "QueryApiTokensConnection": {
            "edges": [
                207
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryApiTokensConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                6
            ],
            "__typename": [
                290
            ]
        },
        "QueryDeploymentEventsConnection": {
            "edges": [
                209
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryDeploymentEventsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                38
            ],
            "__typename": [
                290
            ]
        },
        "QueryDeploymentInstanceExecutionsConnection": {
            "edges": [
                211
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryDeploymentInstanceExecutionsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                41
            ],
            "__typename": [
                290
            ]
        },
        "QueryDeploymentTriggersConnection": {
            "edges": [
                213
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryDeploymentTriggersConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                52
            ],
            "__typename": [
                290
            ]
        },
        "QueryDeploymentsConnection": {
            "edges": [
                215
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryDeploymentsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                36
            ],
            "__typename": [
                290
            ]
        },
        "QueryEnvironmentPatchesConnection": {
            "edges": [
                217
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryEnvironmentPatchesConnectionEdge": {
            "cursor": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "QueryEnvironmentsConnection": {
            "edges": [
                219
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryEnvironmentsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                63
            ],
            "__typename": [
                290
            ]
        },
        "QueryEventsConnection": {
            "edges": [
                221
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryEventsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                81
            ],
            "__typename": [
                290
            ]
        },
        "QueryIntegrationAuthsConnection": {
            "edges": [
                223
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryIntegrationAuthsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                105
            ],
            "__typename": [
                290
            ]
        },
        "QueryIntegrationsConnection": {
            "edges": [
                225
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryIntegrationsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                104
            ],
            "__typename": [
                290
            ]
        },
        "QueryObservabilityDashboardsConnection": {
            "edges": [
                227
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryObservabilityDashboardsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                127
            ],
            "__typename": [
                290
            ]
        },
        "QueryProjectTokensConnection": {
            "edges": [
                229
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryProjectTokensConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                188
            ],
            "__typename": [
                290
            ]
        },
        "QueryProjectsConnection": {
            "edges": [
                231
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryProjectsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                161
            ],
            "__typename": [
                290
            ]
        },
        "QuerySessionsConnection": {
            "edges": [
                233
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QuerySessionsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                286
            ],
            "__typename": [
                290
            ]
        },
        "QueryTeamTemplatesConnection": {
            "edges": [
                235
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryTeamTemplatesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                316
            ],
            "__typename": [
                290
            ]
        },
        "QueryTeamTrustedDomainsConnection": {
            "edges": [
                237
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryTeamTrustedDomainsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                312
            ],
            "__typename": [
                290
            ]
        },
        "QueryTemplatesConnection": {
            "edges": [
                239
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryTemplatesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                316
            ],
            "__typename": [
                290
            ]
        },
        "QueryUserTemplatesConnection": {
            "edges": [
                241
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryUserTemplatesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                316
            ],
            "__typename": [
                290
            ]
        },
        "QueryWebhooksConnection": {
            "edges": [
                243
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "QueryWebhooksConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                197
            ],
            "__typename": [
                290
            ]
        },
        "RailpackInfo": {},
        "RecoveryCodeValidateInput": {
            "code": [
                290
            ],
            "twoFactorLinkingKey": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "RecoveryCodes": {
            "recoveryCodes": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ReferralInfo": {
            "code": [
                290
            ],
            "id": [
                100
            ],
            "referralStats": [
                249
            ],
            "status": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ReferralInfoUpdateInput": {
            "code": [
                290
            ],
            "workspaceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ReferralStats": {
            "credited": [
                103
            ],
            "pending": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "ReferralStatus": {},
        "ReferralUser": {
            "code": [
                290
            ],
            "id": [
                290
            ],
            "status": [
                250
            ],
            "__typename": [
                290
            ]
        },
        "RefundRequest": {
            "amount": [
                103
            ],
            "decision": [
                253
            ],
            "id": [
                100
            ],
            "invoiceId": [
                290
            ],
            "plainThreadId": [
                290
            ],
            "reason": [
                290
            ],
            "userId": [
                290
            ],
            "workspace": [
                395
            ],
            "__typename": [
                290
            ]
        },
        "RefundRequestDecisionEnum": {},
        "Region": {
            "country": [
                290
            ],
            "deploymentConstraints": [
                255
            ],
            "location": [
                290
            ],
            "name": [
                290
            ],
            "railwayMetal": [
                12
            ],
            "region": [
                290
            ],
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "RegionDeploymentConstraints": {
            "adminOnly": [
                12
            ],
            "runtimeExclusivity": [
                290
            ],
            "stagingOnly": [
                12
            ],
            "__typename": [
                290
            ]
        },
        "RegistrationStatus": {},
        "RegistryCredentialsInput": {
            "password": [
                290
            ],
            "username": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ReplicateVolumeInstanceStatus": {},
        "ResetPluginCredentialsInput": {
            "environmentId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ResetPluginInput": {
            "environmentId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ResourceAccess": {
            "project": [
                0
            ],
            "__typename": [
                290
            ]
        },
        "ResourceOwnerType": {},
        "RestartPolicyType": {},
        "SendCommunityThreadNotificationEmailInput": {
            "postEntryContent": [
                290
            ],
            "threadTitle": [
                290
            ],
            "threadUrl": [
                290
            ],
            "userIds": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "SerializedTemplateConfig": {},
        "Service": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "deployments": [
                269,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "featureFlags": [
                2
            ],
            "icon": [
                290
            ],
            "id": [
                100
            ],
            "name": [
                290
            ],
            "project": [
                161
            ],
            "projectId": [
                290
            ],
            "repoTriggers": [
                279,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "serviceInstances": [
                281,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "templateServiceId": [
                290
            ],
            "templateThreadSlug": [
                290
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                290
            ]
        },
        "ServiceConnectInput": {
            "branch": [
                290
            ],
            "image": [
                290
            ],
            "repo": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ServiceCreateInput": {
            "branch": [
                290
            ],
            "environmentId": [
                290
            ],
            "icon": [
                290
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "registryCredentials": [
                257
            ],
            "source": [
                284
            ],
            "templateServiceId": [
                290
            ],
            "variables": [
                75
            ],
            "__typename": [
                290
            ]
        },
        "ServiceDeploymentsConnection": {
            "edges": [
                270
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ServiceDeploymentsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                36
            ],
            "__typename": [
                290
            ]
        },
        "ServiceDomain": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "domain": [
                290
            ],
            "edgeId": [
                290
            ],
            "environmentId": [
                290
            ],
            "id": [
                100
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "suffix": [
                290
            ],
            "targetPort": [
                103
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                290
            ]
        },
        "ServiceDomainCreateInput": {
            "environmentId": [
                290
            ],
            "serviceId": [
                290
            ],
            "targetPort": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "ServiceDomainUpdateInput": {
            "domain": [
                290
            ],
            "environmentId": [
                290
            ],
            "serviceDomainId": [
                290
            ],
            "serviceId": [
                290
            ],
            "targetPort": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "ServiceFeatureFlagToggleInput": {
            "flag": [
                2
            ],
            "serviceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ServiceInstance": {
            "buildCommand": [
                290
            ],
            "builder": [
                13
            ],
            "createdAt": [
                35
            ],
            "cronSchedule": [
                290
            ],
            "deletedAt": [
                35
            ],
            "domains": [
                5
            ],
            "environmentId": [
                290
            ],
            "healthcheckPath": [
                290
            ],
            "healthcheckTimeout": [
                103
            ],
            "id": [
                100
            ],
            "isUpdatable": [
                12
            ],
            "latestDeployment": [
                36
            ],
            "nextCronRunAt": [
                35
            ],
            "nixpacksPlan": [
                111
            ],
            "numReplicas": [
                103
            ],
            "preDeployCommand": [
                111
            ],
            "railpackInfo": [
                244
            ],
            "railwayConfigFile": [
                290
            ],
            "region": [
                290
            ],
            "restartPolicyMaxRetries": [
                103
            ],
            "restartPolicyType": [
                263
            ],
            "rootDirectory": [
                290
            ],
            "serviceId": [
                290
            ],
            "serviceName": [
                290
            ],
            "sleepApplication": [
                12
            ],
            "source": [
                283
            ],
            "startCommand": [
                290
            ],
            "updatedAt": [
                35
            ],
            "upstreamUrl": [
                290
            ],
            "watchPatterns": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ServiceInstanceLimit": {},
        "ServiceInstanceLimitsUpdateInput": {
            "environmentId": [
                290
            ],
            "memoryGB": [
                87
            ],
            "serviceId": [
                290
            ],
            "vCPUs": [
                87
            ],
            "__typename": [
                290
            ]
        },
        "ServiceInstanceUpdateInput": {
            "buildCommand": [
                290
            ],
            "builder": [
                13
            ],
            "cronSchedule": [
                290
            ],
            "healthcheckPath": [
                290
            ],
            "healthcheckTimeout": [
                103
            ],
            "multiRegionConfig": [
                111
            ],
            "nixpacksPlan": [
                111
            ],
            "numReplicas": [
                103
            ],
            "preDeployCommand": [
                290
            ],
            "railwayConfigFile": [
                290
            ],
            "region": [
                290
            ],
            "registryCredentials": [
                257
            ],
            "restartPolicyMaxRetries": [
                103
            ],
            "restartPolicyType": [
                263
            ],
            "rootDirectory": [
                290
            ],
            "sleepApplication": [
                12
            ],
            "source": [
                284
            ],
            "startCommand": [
                290
            ],
            "watchPatterns": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ServiceRepoTriggersConnection": {
            "edges": [
                280
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ServiceRepoTriggersConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                52
            ],
            "__typename": [
                290
            ]
        },
        "ServiceServiceInstancesConnection": {
            "edges": [
                282
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "ServiceServiceInstancesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                275
            ],
            "__typename": [
                290
            ]
        },
        "ServiceSource": {
            "image": [
                290
            ],
            "repo": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ServiceSourceInput": {
            "image": [
                290
            ],
            "repo": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "ServiceUpdateInput": {
            "icon": [
                290
            ],
            "name": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Session": {
            "createdAt": [
                35
            ],
            "expiredAt": [
                35
            ],
            "id": [
                100
            ],
            "isCurrent": [
                12
            ],
            "name": [
                290
            ],
            "type": [
                287
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                290
            ]
        },
        "SessionType": {},
        "SharedVariableConfigureInput": {
            "disabledServiceIds": [
                290
            ],
            "enabledServiceIds": [
                290
            ],
            "environmentId": [
                290
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "SimilarTemplate": {
            "code": [
                290
            ],
            "createdAt": [
                35
            ],
            "creator": [
                319
            ],
            "deploys": [
                103
            ],
            "description": [
                290
            ],
            "health": [
                87
            ],
            "image": [
                290
            ],
            "name": [
                290
            ],
            "teamId": [
                290
            ],
            "userId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "String": {},
        "Subscription": {
            "buildLogs": [
                114,
                {
                    "deploymentId": [
                        290,
                        "String!"
                    ],
                    "filter": [
                        290
                    ],
                    "limit": [
                        103
                    ]
                }
            ],
            "deployment": [
                36,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deploymentEvents": [
                38,
                {
                    "id": [
                        290,
                        "String!"
                    ]
                }
            ],
            "deploymentInstanceExecutions": [
                41,
                {
                    "input": [
                        43,
                        "DeploymentInstanceExecutionInput!"
                    ]
                }
            ],
            "deploymentLogs": [
                114,
                {
                    "deploymentId": [
                        290,
                        "String!"
                    ],
                    "filter": [
                        290
                    ],
                    "limit": [
                        103
                    ]
                }
            ],
            "environmentLogs": [
                114,
                {
                    "afterDate": [
                        290
                    ],
                    "afterLimit": [
                        103
                    ],
                    "anchorDate": [
                        290
                    ],
                    "beforeDate": [
                        290
                    ],
                    "beforeLimit": [
                        103
                    ],
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "filter": [
                        290
                    ]
                }
            ],
            "httpLogs": [
                99,
                {
                    "afterDate": [
                        290
                    ],
                    "afterLimit": [
                        103
                    ],
                    "anchorDate": [
                        290
                    ],
                    "beforeDate": [
                        290
                    ],
                    "beforeLimit": [
                        103
                    ],
                    "deploymentId": [
                        290,
                        "String!"
                    ],
                    "filter": [
                        290
                    ]
                }
            ],
            "pluginLogs": [
                114,
                {
                    "environmentId": [
                        290,
                        "String!"
                    ],
                    "filter": [
                        290
                    ],
                    "limit": [
                        103
                    ],
                    "pluginId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "replicationProgress": [
                380,
                {
                    "volumeInstanceId": [
                        290,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                290
            ]
        },
        "SubscriptionDiscount": {
            "couponId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "SubscriptionItem": {
            "itemId": [
                290
            ],
            "priceId": [
                290
            ],
            "productId": [
                290
            ],
            "quantity": [
                10
            ],
            "__typename": [
                290
            ]
        },
        "SubscriptionModel": {},
        "SubscriptionPlanLimit": {},
        "SubscriptionPlanType": {},
        "SubscriptionState": {},
        "SupportTierOverride": {},
        "TCPProxy": {
            "applicationPort": [
                103
            ],
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "domain": [
                290
            ],
            "environmentId": [
                290
            ],
            "id": [
                100
            ],
            "proxyPort": [
                103
            ],
            "serviceId": [
                290
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                290
            ]
        },
        "TCPProxyCreateInput": {
            "applicationPort": [
                103
            ],
            "environmentId": [
                290
            ],
            "serviceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Team": {
            "adoptionHistory": [
                3
            ],
            "adoptionLevel": [
                87
            ],
            "avatar": [
                290
            ],
            "createdAt": [
                35
            ],
            "customer": [
                26
            ],
            "id": [
                100
            ],
            "members": [
                306
            ],
            "name": [
                290
            ],
            "preferredRegion": [
                290
            ],
            "projects": [
                309,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "slackChannelId": [
                290
            ],
            "supportTierOverride": [
                298
            ],
            "teamPermissions": [
                307
            ],
            "updatedAt": [
                35
            ],
            "workspace": [
                395
            ],
            "__typename": [
                290
            ]
        },
        "TeamBulkProjectTransferInput": {
            "projectIds": [
                290
            ],
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TeamCreateAndSubscribeInput": {
            "avatar": [
                290
            ],
            "name": [
                290
            ],
            "paymentMethodId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TeamCreateAndSubscribeResponse": {
            "customerId": [
                290
            ],
            "paymentIntent": [
                111
            ],
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TeamInviteCodeCreateInput": {
            "role": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TeamMember": {
            "avatar": [
                290
            ],
            "email": [
                290
            ],
            "featureFlags": [
                1
            ],
            "id": [
                290
            ],
            "name": [
                290
            ],
            "role": [
                311
            ],
            "__typename": [
                290
            ]
        },
        "TeamPermission": {
            "createdAt": [
                35
            ],
            "id": [
                100
            ],
            "role": [
                311
            ],
            "teamId": [
                290
            ],
            "updatedAt": [
                35
            ],
            "userId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TeamPermissionChangeInput": {
            "role": [
                311
            ],
            "teamId": [
                290
            ],
            "userId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TeamProjectsConnection": {
            "edges": [
                310
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "TeamProjectsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                161
            ],
            "__typename": [
                290
            ]
        },
        "TeamRole": {},
        "TeamTrustedDomain": {
            "domainName": [
                290
            ],
            "id": [
                100
            ],
            "teamId": [
                290
            ],
            "teamRole": [
                290
            ],
            "verificationData": [
                336
            ],
            "verificationType": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TeamTrustedDomainCreateInput": {
            "domainName": [
                290
            ],
            "teamId": [
                290
            ],
            "teamRole": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TeamUserInviteInput": {
            "code": [
                290
            ],
            "email": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TeamUserRemoveInput": {
            "userId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Template": {
            "activeProjects": [
                103
            ],
            "canvasConfig": [
                15
            ],
            "category": [
                290
            ],
            "code": [
                290
            ],
            "communityThreadSlug": [
                290
            ],
            "config": [
                318
            ],
            "createdAt": [
                35
            ],
            "creator": [
                319
            ],
            "demoProjectId": [
                290
            ],
            "description": [
                290
            ],
            "guides": [
                326
            ],
            "health": [
                87
            ],
            "id": [
                100
            ],
            "image": [
                290
            ],
            "isApproved": [
                12
            ],
            "isV2Template": [
                12
            ],
            "languages": [
                290
            ],
            "metadata": [
                327
            ],
            "name": [
                290
            ],
            "projects": [
                103
            ],
            "readme": [
                290
            ],
            "serializedConfig": [
                265
            ],
            "services": [
                332,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "similarTemplates": [
                289
            ],
            "status": [
                334
            ],
            "tags": [
                290
            ],
            "teamId": [
                290
            ],
            "totalPayout": [
                87
            ],
            "__typename": [
                290
            ]
        },
        "TemplateCloneInput": {
            "code": [
                290
            ],
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TemplateConfig": {},
        "TemplateCreator": {
            "avatar": [
                290
            ],
            "hasPublicProfile": [
                12
            ],
            "name": [
                290
            ],
            "username": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TemplateDeleteInput": {
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TemplateDeployInput": {
            "environmentId": [
                290
            ],
            "projectId": [
                290
            ],
            "services": [
                323
            ],
            "teamId": [
                290
            ],
            "templateCode": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TemplateDeployPayload": {
            "projectId": [
                290
            ],
            "workflowId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TemplateDeployService": {
            "commit": [
                290
            ],
            "hasDomain": [
                12
            ],
            "healthcheckPath": [
                290
            ],
            "id": [
                290
            ],
            "isPrivate": [
                12
            ],
            "name": [
                290
            ],
            "owner": [
                290
            ],
            "preDeployCommand": [
                290
            ],
            "rootDirectory": [
                290
            ],
            "serviceIcon": [
                290
            ],
            "serviceName": [
                290
            ],
            "startCommand": [
                290
            ],
            "tcpProxyApplicationPort": [
                103
            ],
            "template": [
                290
            ],
            "variables": [
                75
            ],
            "volumes": [
                335
            ],
            "__typename": [
                290
            ]
        },
        "TemplateDeployV2Input": {
            "environmentId": [
                290
            ],
            "projectId": [
                290
            ],
            "serializedConfig": [
                265
            ],
            "teamId": [
                290
            ],
            "templateId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TemplateGenerateInput": {
            "environmentId": [
                290
            ],
            "projectId": [
                290
            ],
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TemplateGuide": {
            "post": [
                290
            ],
            "video": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TemplateMetadata": {},
        "TemplatePublishInput": {
            "category": [
                290
            ],
            "demoProjectId": [
                290
            ],
            "description": [
                290
            ],
            "image": [
                290
            ],
            "readme": [
                290
            ],
            "teamId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TemplateService": {
            "config": [
                330
            ],
            "createdAt": [
                35
            ],
            "id": [
                100
            ],
            "templateId": [
                290
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                290
            ]
        },
        "TemplateServiceConfig": {},
        "TemplateServiceSourceEjectInput": {
            "projectId": [
                290
            ],
            "repoName": [
                290
            ],
            "repoOwner": [
                290
            ],
            "serviceIds": [
                290
            ],
            "upstreamUrl": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TemplateServicesConnection": {
            "edges": [
                333
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "TemplateServicesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                329
            ],
            "__typename": [
                290
            ]
        },
        "TemplateStatus": {},
        "TemplateVolume": {},
        "TrustedDomainVerificationData": {
            "domainMatch": [
                57
            ],
            "domainStatus": [
                25
            ],
            "__typename": [
                290
            ]
        },
        "TwoFactorInfo": {
            "hasRecoveryCodes": [
                12
            ],
            "isVerified": [
                12
            ],
            "__typename": [
                290
            ]
        },
        "TwoFactorInfoCreateInput": {
            "token": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TwoFactorInfoSecret": {
            "secret": [
                290
            ],
            "uri": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "TwoFactorInfoValidateInput": {
            "token": [
                290
            ],
            "twoFactorLinkingKey": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Upload": {},
        "UsageAnomaly": {
            "actedOn": [
                35
            ],
            "action": [
                343
            ],
            "actorId": [
                290
            ],
            "flaggedAt": [
                35
            ],
            "flaggedFor": [
                344
            ],
            "id": [
                100
            ],
            "__typename": [
                290
            ]
        },
        "UsageAnomalyAction": {},
        "UsageAnomalyFlagReason": {},
        "UsageLimit": {
            "customerId": [
                290
            ],
            "hardLimit": [
                103
            ],
            "id": [
                100
            ],
            "isOverLimit": [
                12
            ],
            "softLimit": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "UsageLimitRemoveInput": {
            "customerId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "UsageLimitSetInput": {
            "customerId": [
                290
            ],
            "hardLimitDollars": [
                103
            ],
            "softLimitDollars": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "User": {
            "agreedFairUse": [
                12
            ],
            "avatar": [
                290
            ],
            "banReason": [
                290
            ],
            "createdAt": [
                35
            ],
            "email": [
                290
            ],
            "featureFlags": [
                1
            ],
            "flags": [
                349
            ],
            "has2FA": [
                12
            ],
            "id": [
                100
            ],
            "isAdmin": [
                12
            ],
            "isConductor": [
                12
            ],
            "isVerified": [
                12
            ],
            "lastLogin": [
                35
            ],
            "name": [
                290
            ],
            "profile": [
                353
            ],
            "projects": [
                358,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "providerAuths": [
                360,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "registrationStatus": [
                256
            ],
            "riskLevel": [
                87
            ],
            "teams": [
                362,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "termsAgreedOn": [
                35
            ],
            "username": [
                290
            ],
            "workspace": [
                395
            ],
            "workspaces": [
                395
            ],
            "__typename": [
                290
            ]
        },
        "UserFlag": {},
        "UserFlagsRemoveInput": {
            "flags": [
                349
            ],
            "userId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "UserFlagsSetInput": {
            "flags": [
                349
            ],
            "userId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "UserKickbackEarnings": {
            "total_amount": [
                87
            ],
            "__typename": [
                290
            ]
        },
        "UserProfile": {
            "bio": [
                290
            ],
            "isPublic": [
                12
            ],
            "website": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "UserProfileResponse": {
            "avatar": [
                290
            ],
            "createdAt": [
                35
            ],
            "customerId": [
                290
            ],
            "id": [
                290
            ],
            "isTrialing": [
                12
            ],
            "name": [
                290
            ],
            "profile": [
                353
            ],
            "publicProjects": [
                355,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "publishedTemplates": [
                289
            ],
            "state": [
                290
            ],
            "totalDeploys": [
                103
            ],
            "username": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "UserProfileResponsePublicProjectsConnection": {
            "edges": [
                356
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "UserProfileResponsePublicProjectsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                161
            ],
            "__typename": [
                290
            ]
        },
        "UserProfileUpdateInput": {
            "bio": [
                290
            ],
            "isPublic": [
                12
            ],
            "website": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "UserProjectsConnection": {
            "edges": [
                359
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "UserProjectsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                161
            ],
            "__typename": [
                290
            ]
        },
        "UserProviderAuthsConnection": {
            "edges": [
                361
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "UserProviderAuthsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                200
            ],
            "__typename": [
                290
            ]
        },
        "UserTeamsConnection": {
            "edges": [
                363
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "UserTeamsConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                301
            ],
            "__typename": [
                290
            ]
        },
        "UserUpdateInput": {
            "avatar": [
                290
            ],
            "name": [
                290
            ],
            "username": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Variable": {
            "createdAt": [
                35
            ],
            "environment": [
                63
            ],
            "environmentId": [
                290
            ],
            "id": [
                100
            ],
            "isSealed": [
                12
            ],
            "name": [
                290
            ],
            "plugin": [
                142
            ],
            "pluginId": [
                290
            ],
            "references": [
                290
            ],
            "service": [
                266
            ],
            "serviceId": [
                290
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                290
            ]
        },
        "VariableCollectionUpsertInput": {
            "environmentId": [
                290
            ],
            "projectId": [
                290
            ],
            "replace": [
                12
            ],
            "serviceId": [
                290
            ],
            "variables": [
                75
            ],
            "__typename": [
                290
            ]
        },
        "VariableDeleteInput": {
            "environmentId": [
                290
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "VariableUpsertInput": {
            "environmentId": [
                290
            ],
            "name": [
                290
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "value": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "VercelAccount": {
            "id": [
                290
            ],
            "integrationAuthId": [
                290
            ],
            "isUser": [
                12
            ],
            "name": [
                290
            ],
            "projects": [
                371
            ],
            "slug": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "VercelInfo": {
            "accounts": [
                369
            ],
            "__typename": [
                290
            ]
        },
        "VercelProject": {
            "accountId": [
                290
            ],
            "id": [
                290
            ],
            "name": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Volume": {
            "createdAt": [
                35
            ],
            "id": [
                100
            ],
            "name": [
                290
            ],
            "project": [
                161
            ],
            "projectId": [
                290
            ],
            "volumeInstances": [
                384,
                {
                    "after": [
                        290
                    ],
                    "before": [
                        290
                    ],
                    "first": [
                        103
                    ],
                    "last": [
                        103
                    ]
                }
            ],
            "__typename": [
                290
            ]
        },
        "VolumeCreateInput": {
            "environmentId": [
                290
            ],
            "mountPath": [
                290
            ],
            "projectId": [
                290
            ],
            "serviceId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "VolumeInstance": {
            "createdAt": [
                35
            ],
            "currentSizeMB": [
                87
            ],
            "environment": [
                63
            ],
            "environmentId": [
                290
            ],
            "externalId": [
                290
            ],
            "id": [
                100
            ],
            "mountPath": [
                290
            ],
            "region": [
                290
            ],
            "service": [
                266
            ],
            "serviceId": [
                290
            ],
            "sizeMB": [
                103
            ],
            "state": [
                382
            ],
            "type": [
                378
            ],
            "volume": [
                372
            ],
            "volumeId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "VolumeInstanceBackup": {
            "createdAt": [
                35
            ],
            "creatorId": [
                290
            ],
            "expiresAt": [
                35
            ],
            "externalId": [
                290
            ],
            "id": [
                290
            ],
            "name": [
                290
            ],
            "referencedMB": [
                103
            ],
            "usedMB": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "VolumeInstanceBackupSchedule": {
            "createdAt": [
                35
            ],
            "cron": [
                290
            ],
            "id": [
                100
            ],
            "kind": [
                377
            ],
            "name": [
                290
            ],
            "retentionSeconds": [
                103
            ],
            "__typename": [
                290
            ]
        },
        "VolumeInstanceBackupScheduleKind": {},
        "VolumeInstanceType": {},
        "VolumeInstanceUpdateInput": {
            "mountPath": [
                290
            ],
            "serviceId": [
                290
            ],
            "state": [
                382
            ],
            "type": [
                378
            ],
            "__typename": [
                290
            ]
        },
        "VolumeReplicationProgressUpdate": {
            "bytesTransferred": [
                10
            ],
            "currentSnapshot": [
                381
            ],
            "error": [
                290
            ],
            "estimatedTimeRemainingMs": [
                10
            ],
            "nbSnapshots": [
                103
            ],
            "percentComplete": [
                87
            ],
            "snapshotsSizes": [
                10
            ],
            "status": [
                258
            ],
            "totalBytes": [
                10
            ],
            "transferRateMbps": [
                87
            ],
            "__typename": [
                290
            ]
        },
        "VolumeSnapshotReplicationProgressUpdate": {
            "bytesTransferred": [
                10
            ],
            "compressedBytesTransferred": [
                10
            ],
            "compressedTransferRateMbps": [
                87
            ],
            "elapsedMs": [
                103
            ],
            "error": [
                290
            ],
            "estimatedTimeRemainingMs": [
                10
            ],
            "index": [
                103
            ],
            "percentComplete": [
                87
            ],
            "startedAt": [
                35
            ],
            "status": [
                258
            ],
            "totalBytes": [
                10
            ],
            "transferRateMbps": [
                87
            ],
            "__typename": [
                290
            ]
        },
        "VolumeState": {},
        "VolumeUpdateInput": {
            "name": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "VolumeVolumeInstancesConnection": {
            "edges": [
                385
            ],
            "pageInfo": [
                137
            ],
            "__typename": [
                290
            ]
        },
        "VolumeVolumeInstancesConnectionEdge": {
            "cursor": [
                290
            ],
            "node": [
                374
            ],
            "__typename": [
                290
            ]
        },
        "WebhookCreateInput": {
            "filters": [
                290
            ],
            "projectId": [
                290
            ],
            "url": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "WebhookUpdateInput": {
            "filters": [
                290
            ],
            "url": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "Withdrawal": {
            "amount": [
                87
            ],
            "createdAt": [
                35
            ],
            "customerId": [
                290
            ],
            "id": [
                100
            ],
            "status": [
                391
            ],
            "updatedAt": [
                35
            ],
            "withdrawalAccountId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "WithdrawalAccount": {
            "customerId": [
                290
            ],
            "id": [
                100
            ],
            "platform": [
                390
            ],
            "platformDetails": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "WithdrawalPlatformTypes": {},
        "WithdrawalStatusType": {},
        "WorkflowId": {
            "workflowId": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "WorkflowResult": {
            "error": [
                290
            ],
            "status": [
                394
            ],
            "__typename": [
                290
            ]
        },
        "WorkflowStatus": {},
        "Workspace": {
            "avatar": [
                290
            ],
            "banReason": [
                290
            ],
            "createdAt": [
                35
            ],
            "customer": [
                26
            ],
            "discordRole": [
                290
            ],
            "id": [
                100
            ],
            "name": [
                290
            ],
            "preferredRegion": [
                290
            ],
            "referredUsers": [
                251
            ],
            "slackChannelId": [
                290
            ],
            "subscriptionModel": [
                294
            ],
            "supportTierOverride": [
                298
            ],
            "team": [
                301
            ],
            "__typename": [
                290
            ]
        },
        "WorkspaceUpdateInput": {
            "avatar": [
                290
            ],
            "name": [
                290
            ],
            "preferredRegion": [
                290
            ],
            "__typename": [
                290
            ]
        },
        "customerTogglePayoutsToCreditsInput": {
            "isWithdrawingToCredits": [
                12
            ],
            "__typename": [
                290
            ]
        }
    }
}