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
        39,
        44,
        46,
        49,
        54,
        72,
        85,
        95,
        97,
        98,
        106,
        108,
        114,
        116,
        117,
        129,
        142,
        143,
        180,
        189,
        198,
        239,
        245,
        248,
        251,
        256,
        257,
        259,
        270,
        281,
        284,
        288,
        289,
        290,
        291,
        292,
        305,
        312,
        321,
        324,
        328,
        329,
        335,
        337,
        338,
        343,
        371,
        372,
        374,
        382,
        383,
        386
    ],
    "types": {
        "AccessRule": {
            "disallowed": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ActiveFeatureFlag": {},
        "ActiveServiceFeatureFlag": {},
        "AdoptionInfo": {
            "adoptionLevel": [
                85
            ],
            "createdAt": [
                35
            ],
            "customer": [
                295
            ],
            "deltaLevel": [
                85
            ],
            "id": [
                95
            ],
            "matchedIcpEmail": [
                284
            ],
            "monthlyEstimatedUsage": [
                85
            ],
            "numConfigFile": [
                98
            ],
            "numCronSchedule": [
                98
            ],
            "numDeploys": [
                98
            ],
            "numEnvs": [
                98
            ],
            "numFailedDeploys": [
                98
            ],
            "numHealthcheck": [
                98
            ],
            "numIconConfig": [
                98
            ],
            "numRegion": [
                98
            ],
            "numReplicas": [
                98
            ],
            "numRootDirectory": [
                98
            ],
            "numSeats": [
                98
            ],
            "numServices": [
                98
            ],
            "numSupportRequests": [
                98
            ],
            "numVariables": [
                98
            ],
            "numWatchPatterns": [
                98
            ],
            "totalCores": [
                85
            ],
            "totalDisk": [
                85
            ],
            "totalNetwork": [
                85
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                284
            ]
        },
        "AggregatedUsage": {
            "measurement": [
                116
            ],
            "tags": [
                118
            ],
            "value": [
                85
            ],
            "__typename": [
                284
            ]
        },
        "AllDomains": {
            "customDomains": [
                23
            ],
            "serviceDomains": [
                265
            ],
            "__typename": [
                284
            ]
        },
        "ApiToken": {
            "displayToken": [
                284
            ],
            "id": [
                95
            ],
            "name": [
                284
            ],
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ApiTokenCreateInput": {
            "name": [
                284
            ],
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "BanReasonHistory": {
            "actor": [
                342
            ],
            "banReason": [
                284
            ],
            "createdAt": [
                35
            ],
            "id": [
                95
            ],
            "__typename": [
                284
            ]
        },
        "BaseEnvironmentOverrideInput": {
            "baseEnvironmentOverrideId": [
                284
            ],
            "__typename": [
                284
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
                284
            ]
        },
        "Boolean": {},
        "Builder": {},
        "CDNProvider": {},
        "CanvasConfig": {},
        "CertificatePublicData": {
            "domainNames": [
                284
            ],
            "expiresAt": [
                35
            ],
            "fingerprintSha256": [
                284
            ],
            "issuedAt": [
                35
            ],
            "keyType": [
                108
            ],
            "__typename": [
                284
            ]
        },
        "CertificateStatus": {},
        "CnameCheck": {
            "link": [
                284
            ],
            "message": [
                284
            ],
            "status": [
                19
            ],
            "__typename": [
                284
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
                61
            ],
            "environmentId": [
                284
            ],
            "id": [
                95
            ],
            "migratedAt": [
                35
            ],
            "plugin": [
                137
            ],
            "pluginId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "Credit": {
            "amount": [
                85
            ],
            "createdAt": [
                35
            ],
            "customerId": [
                284
            ],
            "id": [
                95
            ],
            "memo": [
                284
            ],
            "type": [
                22
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                284
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
                284
            ],
            "edgeId": [
                284
            ],
            "environmentId": [
                284
            ],
            "id": [
                95
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "status": [
                25
            ],
            "targetPort": [
                98
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                284
            ]
        },
        "CustomDomainCreateInput": {
            "domain": [
                284
            ],
            "environmentId": [
                284
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "targetPort": [
                98
            ],
            "__typename": [
                284
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
                284
            ]
        },
        "Customer": {
            "appliedCredits": [
                85
            ],
            "billingEmail": [
                284
            ],
            "billingPeriod": [
                11
            ],
            "creditBalance": [
                85
            ],
            "credits": [
                27,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "defaultPaymentMethod": [
                133
            ],
            "defaultPaymentMethodId": [
                284
            ],
            "hasExhaustedFreePlan": [
                12
            ],
            "id": [
                95
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
                135
            ],
            "remainingUsageCreditBalance": [
                85
            ],
            "state": [
                291
            ],
            "stripeCustomerId": [
                284
            ],
            "subscriptions": [
                30
            ],
            "usageLimit": [
                339
            ],
            "workspace": [
                387
            ],
            "__typename": [
                284
            ]
        },
        "CustomerCreditsConnection": {
            "edges": [
                28
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "CustomerCreditsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                21
            ],
            "__typename": [
                284
            ]
        },
        "CustomerInvoice": {
            "amountPaid": [
                85
            ],
            "hostedURL": [
                284
            ],
            "invoiceId": [
                284
            ],
            "items": [
                287
            ],
            "paymentIntentStatus": [
                284
            ],
            "pdfURL": [
                284
            ],
            "periodEnd": [
                284
            ],
            "periodStart": [
                284
            ],
            "status": [
                284
            ],
            "subscriptionId": [
                284
            ],
            "total": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "CustomerSubscription": {
            "billingCycleAnchor": [
                35
            ],
            "cancelAt": [
                284
            ],
            "cancelAtPeriodEnd": [
                12
            ],
            "couponId": [
                284
            ],
            "discounts": [
                286
            ],
            "id": [
                284
            ],
            "items": [
                287
            ],
            "latestInvoiceId": [
                284
            ],
            "nextInvoiceCurrentTotal": [
                98
            ],
            "nextInvoiceDate": [
                284
            ],
            "status": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "DNSRecordPurpose": {},
        "DNSRecordStatus": {},
        "DNSRecordType": {},
        "DNSRecords": {
            "currentValue": [
                284
            ],
            "fqdn": [
                284
            ],
            "hostlabel": [
                284
            ],
            "purpose": [
                31
            ],
            "recordType": [
                33
            ],
            "requiredValue": [
                284
            ],
            "status": [
                32
            ],
            "zone": [
                284
            ],
            "__typename": [
                284
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
                342
            ],
            "deploymentStopped": [
                12
            ],
            "environment": [
                61
            ],
            "environmentId": [
                284
            ],
            "id": [
                95
            ],
            "meta": [
                46
            ],
            "projectId": [
                284
            ],
            "service": [
                260
            ],
            "serviceId": [
                284
            ],
            "snapshotId": [
                284
            ],
            "sockets": [
                48
            ],
            "staticUrl": [
                284
            ],
            "status": [
                49
            ],
            "suggestAddServiceDomain": [
                12
            ],
            "updatedAt": [
                35
            ],
            "url": [
                284
            ],
            "__typename": [
                284
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
                95
            ],
            "payload": [
                38
            ],
            "step": [
                39
            ],
            "__typename": [
                284
            ]
        },
        "DeploymentEventPayload": {
            "error": [
                284
            ],
            "__typename": [
                284
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
                284
            ],
            "deploymentMeta": [
                46
            ],
            "id": [
                95
            ],
            "status": [
                44
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                284
            ]
        },
        "DeploymentInstanceExecutionCreateInput": {
            "serviceInstanceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "DeploymentInstanceExecutionInput": {
            "deploymentId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "DeploymentInstanceExecutionListInput": {
            "environmentId": [
                284
            ],
            "serviceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "DeploymentInstanceStatus": {},
        "DeploymentListInput": {
            "environmentId": [
                284
            ],
            "includeDeleted": [
                12
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "status": [
                50
            ],
            "__typename": [
                284
            ]
        },
        "DeploymentMeta": {},
        "DeploymentSnapshot": {
            "createdAt": [
                35
            ],
            "id": [
                95
            ],
            "updatedAt": [
                35
            ],
            "variables": [
                72
            ],
            "__typename": [
                284
            ]
        },
        "DeploymentSocket": {
            "ipv6": [
                12
            ],
            "port": [
                98
            ],
            "processName": [
                284
            ],
            "updatedAt": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "DeploymentStatus": {},
        "DeploymentStatusInput": {
            "in": [
                49
            ],
            "notIn": [
                49
            ],
            "__typename": [
                284
            ]
        },
        "DeploymentTrigger": {
            "baseEnvironmentOverrideId": [
                284
            ],
            "branch": [
                284
            ],
            "checkSuites": [
                12
            ],
            "environmentId": [
                284
            ],
            "id": [
                95
            ],
            "projectId": [
                284
            ],
            "provider": [
                284
            ],
            "repository": [
                284
            ],
            "serviceId": [
                284
            ],
            "validCheckSuites": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "DeploymentTriggerCreateInput": {
            "branch": [
                284
            ],
            "checkSuites": [
                12
            ],
            "environmentId": [
                284
            ],
            "projectId": [
                284
            ],
            "provider": [
                284
            ],
            "repository": [
                284
            ],
            "rootDirectory": [
                284
            ],
            "serviceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "DeploymentTriggerUpdateInput": {
            "branch": [
                284
            ],
            "checkSuites": [
                12
            ],
            "repository": [
                284
            ],
            "rootDirectory": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "DisplayConfig": {},
        "Domain": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "domain": [
                284
            ],
            "edgeId": [
                284
            ],
            "environmentId": [
                284
            ],
            "id": [
                95
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "targetPort": [
                98
            ],
            "updatedAt": [
                35
            ],
            "on_CustomDomain": [
                23
            ],
            "on_ServiceDomain": [
                265
            ],
            "__typename": [
                284
            ]
        },
        "DomainAvailable": {
            "available": [
                12
            ],
            "message": [
                284
            ],
            "__typename": [
                284
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
                55
            ],
            "__typename": [
                284
            ]
        },
        "EgressGateway": {
            "ipv4": [
                284
            ],
            "region": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "EgressGatewayCreateInput": {
            "environmentId": [
                284
            ],
            "region": [
                284
            ],
            "serviceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "EgressGatewayServiceTargetInput": {
            "environmentId": [
                284
            ],
            "serviceId": [
                284
            ],
            "__typename": [
                284
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
                63,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "deployments": [
                65,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "id": [
                95
            ],
            "isEphemeral": [
                12
            ],
            "meta": [
                67
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "serviceInstances": [
                69,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "sourceEnvironment": [
                61
            ],
            "unmergedChangesCount": [
                98
            ],
            "updatedAt": [
                35
            ],
            "variables": [
                73,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "volumeInstances": [
                75,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentCreateInput": {
            "ephemeral": [
                12
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "skipInitialDeploys": [
                12
            ],
            "sourceEnvironmentId": [
                284
            ],
            "stageInitialChanges": [
                12
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentDeploymentTriggersConnection": {
            "edges": [
                64
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentDeploymentTriggersConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                51
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentDeploymentsConnection": {
            "edges": [
                66
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentDeploymentsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                36
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentMeta": {
            "baseBranch": [
                284
            ],
            "branch": [
                284
            ],
            "prCommentId": [
                98
            ],
            "prNumber": [
                98
            ],
            "prRepo": [
                284
            ],
            "prTitle": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentRenameInput": {
            "name": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentServiceInstancesConnection": {
            "edges": [
                70
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentServiceInstancesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                269
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentTriggersDeployInput": {
            "environmentId": [
                284
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentVariables": {},
        "EnvironmentVariablesConnection": {
            "edges": [
                74
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentVariablesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                359
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentVolumeInstancesConnection": {
            "edges": [
                76
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "EnvironmentVolumeInstancesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                368
            ],
            "__typename": [
                284
            ]
        },
        "Errors": {
            "errors": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "EstimatedUsage": {
            "estimatedValue": [
                85
            ],
            "measurement": [
                116
            ],
            "projectId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "Event": {
            "action": [
                284
            ],
            "createdAt": [
                35
            ],
            "environment": [
                61
            ],
            "environmentId": [
                284
            ],
            "id": [
                95
            ],
            "object": [
                284
            ],
            "payload": [
                106
            ],
            "project": [
                156
            ],
            "projectId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "EventFilterInput": {
            "action": [
                81
            ],
            "object": [
                81
            ],
            "__typename": [
                284
            ]
        },
        "EventStringListFilter": {
            "in": [
                284
            ],
            "notIn": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ExplicitOwnerInput": {
            "id": [
                284
            ],
            "type": [
                256
            ],
            "__typename": [
                284
            ]
        },
        "ExternalWorkspace": {
            "avatar": [
                284
            ],
            "banReason": [
                284
            ],
            "createdAt": [
                35
            ],
            "customerState": [
                291
            ],
            "discordRole": [
                284
            ],
            "hasBAA": [
                12
            ],
            "id": [
                284
            ],
            "name": [
                284
            ],
            "preferredRegion": [
                284
            ],
            "projects": [
                156
            ],
            "subscriptionModel": [
                288
            ],
            "supportTierOverride": [
                284
            ],
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "FeatureFlagToggleInput": {
            "flag": [
                1
            ],
            "__typename": [
                284
            ]
        },
        "Float": {},
        "GitHubAccess": {
            "hasAccess": [
                12
            ],
            "isPublic": [
                12
            ],
            "__typename": [
                284
            ]
        },
        "GitHubBranch": {
            "name": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "GitHubRepo": {
            "defaultBranch": [
                284
            ],
            "fullName": [
                284
            ],
            "id": [
                98
            ],
            "installationId": [
                284
            ],
            "isPrivate": [
                12
            ],
            "name": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "GitHubRepoDeployInput": {
            "branch": [
                284
            ],
            "projectId": [
                284
            ],
            "repo": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "GitHubRepoUpdateInput": {
            "environmentId": [
                284
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "GitHubRepoWithoutInstallation": {
            "defaultBranch": [
                284
            ],
            "fullName": [
                284
            ],
            "id": [
                98
            ],
            "isPrivate": [
                12
            ],
            "name": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "HerokuApp": {
            "id": [
                284
            ],
            "name": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "HerokuImportVariablesInput": {
            "environmentId": [
                284
            ],
            "herokuAppId": [
                284
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "HttpLog": {
            "clientUa": [
                284
            ],
            "deploymentId": [
                284
            ],
            "deploymentInstanceId": [
                284
            ],
            "downstreamProto": [
                284
            ],
            "edgeRegion": [
                284
            ],
            "host": [
                284
            ],
            "httpStatus": [
                98
            ],
            "method": [
                284
            ],
            "path": [
                284
            ],
            "requestId": [
                284
            ],
            "responseDetails": [
                284
            ],
            "rxBytes": [
                98
            ],
            "srcIp": [
                284
            ],
            "timestamp": [
                284
            ],
            "totalDuration": [
                98
            ],
            "txBytes": [
                98
            ],
            "upstreamAddress": [
                284
            ],
            "upstreamProto": [
                284
            ],
            "upstreamRqDuration": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "ID": {},
        "Incident": {
            "id": [
                284
            ],
            "message": [
                284
            ],
            "status": [
                97
            ],
            "url": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "IncidentStatus": {},
        "Int": {},
        "Integration": {
            "config": [
                106
            ],
            "id": [
                95
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "IntegrationAuth": {
            "id": [
                95
            ],
            "integrations": [
                101,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "provider": [
                284
            ],
            "providerId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "IntegrationAuthIntegrationsConnection": {
            "edges": [
                102
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "IntegrationAuthIntegrationsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                99
            ],
            "__typename": [
                284
            ]
        },
        "IntegrationCreateInput": {
            "config": [
                106
            ],
            "integrationAuthId": [
                284
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "IntegrationUpdateInput": {
            "config": [
                106
            ],
            "integrationAuthId": [
                284
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "InviteCode": {
            "code": [
                284
            ],
            "createdAt": [
                35
            ],
            "id": [
                95
            ],
            "project": [
                156
            ],
            "projectId": [
                284
            ],
            "role": [
                180
            ],
            "__typename": [
                284
            ]
        },
        "JSON": {},
        "JobApplicationCreateInput": {
            "email": [
                284
            ],
            "jobId": [
                284
            ],
            "name": [
                284
            ],
            "why": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "KeyType": {},
        "Log": {
            "attributes": [
                110
            ],
            "message": [
                284
            ],
            "severity": [
                284
            ],
            "tags": [
                111
            ],
            "timestamp": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "LogAttribute": {
            "key": [
                284
            ],
            "value": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "LogTags": {
            "deploymentId": [
                284
            ],
            "deploymentInstanceId": [
                284
            ],
            "environmentId": [
                284
            ],
            "pluginId": [
                284
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "snapshotId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "LoginSessionAuthInput": {
            "code": [
                284
            ],
            "hostname": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "Maintenance": {
            "id": [
                284
            ],
            "message": [
                284
            ],
            "status": [
                114
            ],
            "url": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "MaintenanceStatus": {},
        "Metric": {
            "ts": [
                98
            ],
            "value": [
                85
            ],
            "__typename": [
                284
            ]
        },
        "MetricMeasurement": {},
        "MetricTag": {},
        "MetricTags": {
            "deploymentId": [
                284
            ],
            "environmentId": [
                284
            ],
            "pluginId": [
                284
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "volumeId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "MetricsResult": {
            "measurement": [
                116
            ],
            "tags": [
                118
            ],
            "values": [
                115
            ],
            "__typename": [
                284
            ]
        },
        "Mutation": {
            "apiTokenCreate": [
                284,
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
                        284,
                        "String!"
                    ]
                }
            ],
            "baseEnvironmentOverride": [
                12,
                {
                    "id": [
                        284,
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
                        284,
                        "String!"
                    ]
                }
            ],
            "customDomainUpdate": [
                12,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "id": [
                        284,
                        "String!"
                    ],
                    "targetPort": [
                        98
                    ]
                }
            ],
            "customerCreateFreePlanSubscription": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "customerTogglePayoutsToCredits": [
                12,
                {
                    "customerId": [
                        284,
                        "String!"
                    ],
                    "input": [
                        389,
                        "customerTogglePayoutsToCreditsInput!"
                    ]
                }
            ],
            "deploymentApprove": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deploymentCancel": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deploymentInstanceExecutionCreate": [
                12,
                {
                    "input": [
                        41,
                        "DeploymentInstanceExecutionCreateInput!"
                    ]
                }
            ],
            "deploymentRedeploy": [
                36,
                {
                    "id": [
                        284,
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
                        284,
                        "String!"
                    ]
                }
            ],
            "deploymentRestart": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deploymentRollback": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deploymentStop": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerCreate": [
                51,
                {
                    "input": [
                        52,
                        "DeploymentTriggerCreateInput!"
                    ]
                }
            ],
            "deploymentTriggerDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerUpdate": [
                51,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        53,
                        "DeploymentTriggerUpdateInput!"
                    ]
                }
            ],
            "dockerComposeImport": [
                77,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ],
                    "yaml": [
                        284,
                        "String!"
                    ]
                }
            ],
            "egressGatewayAssociationCreate": [
                58,
                {
                    "input": [
                        59,
                        "EgressGatewayCreateInput!"
                    ]
                }
            ],
            "egressGatewayAssociationsClear": [
                12,
                {
                    "input": [
                        60,
                        "EgressGatewayServiceTargetInput!"
                    ]
                }
            ],
            "emailChangeConfirm": [
                12,
                {
                    "nonce": [
                        284,
                        "String!"
                    ]
                }
            ],
            "emailChangeInitiate": [
                12,
                {
                    "newEmail": [
                        284,
                        "String!"
                    ]
                }
            ],
            "environmentCreate": [
                61,
                {
                    "input": [
                        62,
                        "EnvironmentCreateInput!"
                    ]
                }
            ],
            "environmentDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "environmentRename": [
                61,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        68,
                        "EnvironmentRenameInput!"
                    ]
                }
            ],
            "environmentTriggersDeploy": [
                12,
                {
                    "input": [
                        71,
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
                        84,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "featureFlagRemove": [
                12,
                {
                    "input": [
                        84,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "githubRepoDeploy": [
                12,
                {
                    "input": [
                        89,
                        "GitHubRepoDeployInput!"
                    ]
                }
            ],
            "githubRepoUpdate": [
                12,
                {
                    "input": [
                        90,
                        "GitHubRepoUpdateInput!"
                    ]
                }
            ],
            "herokuImportVariables": [
                98,
                {
                    "input": [
                        93,
                        "HerokuImportVariablesInput!"
                    ]
                }
            ],
            "integrationCreate": [
                99,
                {
                    "input": [
                        103,
                        "IntegrationCreateInput!"
                    ]
                }
            ],
            "integrationDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "integrationUpdate": [
                99,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        104,
                        "IntegrationUpdateInput!"
                    ]
                }
            ],
            "inviteCodeUse": [
                156,
                {
                    "code": [
                        284,
                        "String!"
                    ]
                }
            ],
            "jobApplicationCreate": [
                12,
                {
                    "input": [
                        107,
                        "JobApplicationCreateInput!"
                    ],
                    "resume": [
                        335,
                        "Upload!"
                    ]
                }
            ],
            "loginSessionAuth": [
                12,
                {
                    "input": [
                        112,
                        "LoginSessionAuthInput!"
                    ]
                }
            ],
            "loginSessionCancel": [
                12,
                {
                    "code": [
                        284,
                        "String!"
                    ]
                }
            ],
            "loginSessionConsume": [
                284,
                {
                    "code": [
                        284,
                        "String!"
                    ]
                }
            ],
            "loginSessionCreate": [
                284
            ],
            "loginSessionVerify": [
                12,
                {
                    "code": [
                        284,
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
                        123,
                        "ObservabilityDashboardCreateInput!"
                    ]
                }
            ],
            "observabilityDashboardReset": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "observabilityDashboardUpdate": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        130,
                        "[ObservabilityDashboardUpdateInput!]!"
                    ]
                }
            ],
            "pluginCreate": [
                137,
                {
                    "input": [
                        140,
                        "PluginCreateInput!"
                    ]
                }
            ],
            "pluginDelete": [
                12,
                {
                    "environmentId": [
                        284
                    ],
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "pluginReset": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        254,
                        "ResetPluginInput!"
                    ]
                }
            ],
            "pluginResetCredentials": [
                284,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        253,
                        "ResetPluginCredentialsInput!"
                    ]
                }
            ],
            "pluginRestart": [
                137,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        141,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginStart": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        141,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginUpdate": [
                137,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        144,
                        "PluginUpdateInput!"
                    ]
                }
            ],
            "preferenceOverridesCreateUpdate": [
                12,
                {
                    "input": [
                        148,
                        "PreferenceOverridesCreateUpdateData!"
                    ]
                }
            ],
            "preferenceOverridesDestroyForResource": [
                12,
                {
                    "input": [
                        149,
                        "PreferenceOverridesDestroyData!"
                    ]
                }
            ],
            "preferencesUpdate": [
                150,
                {
                    "input": [
                        151,
                        "PreferencesUpdateData!"
                    ]
                }
            ],
            "privateNetworkCreateOrGet": [
                152,
                {
                    "input": [
                        153,
                        "PrivateNetworkCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointCreateOrGet": [
                154,
                {
                    "input": [
                        155,
                        "PrivateNetworkEndpointCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointRename": [
                12,
                {
                    "dnsName": [
                        284,
                        "String!"
                    ],
                    "id": [
                        284,
                        "String!"
                    ],
                    "privateNetworkId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "privateNetworksForEnvironmentDelete": [
                12,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectClaim": [
                156,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "workspaceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectCreate": [
                156,
                {
                    "input": [
                        157,
                        "ProjectCreateInput!"
                    ]
                }
            ],
            "projectDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectInvitationAccept": [
                174,
                {
                    "code": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectInvitationCreate": [
                167,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        170,
                        "ProjectInvitee!"
                    ]
                }
            ],
            "projectInvitationDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectInvitationResend": [
                167,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectInviteUser": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        169,
                        "ProjectInviteUserInput!"
                    ]
                }
            ],
            "projectLeave": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectMemberRemove": [
                171,
                {
                    "input": [
                        172,
                        "ProjectMemberRemoveInput!"
                    ]
                }
            ],
            "projectMemberUpdate": [
                171,
                {
                    "input": [
                        173,
                        "ProjectMemberUpdateInput!"
                    ]
                }
            ],
            "projectScheduleDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectScheduleDeleteCancel": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectScheduleDeleteForce": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectTokenCreate": [
                284,
                {
                    "input": [
                        184,
                        "ProjectTokenCreateInput!"
                    ]
                }
            ],
            "projectTokenDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectTransferConfirm": [
                12,
                {
                    "input": [
                        185,
                        "ProjectTransferConfirmInput!"
                    ]
                }
            ],
            "projectTransferInitiate": [
                12,
                {
                    "input": [
                        186,
                        "ProjectTransferInitiateInput!"
                    ]
                }
            ],
            "projectTransferToTeam": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        187,
                        "ProjectTransferToTeamInput!"
                    ]
                }
            ],
            "projectUpdate": [
                156,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        188,
                        "ProjectUpdateInput!"
                    ]
                }
            ],
            "providerAuthRemove": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "recoveryCodeGenerate": [
                241
            ],
            "recoveryCodeValidate": [
                12,
                {
                    "input": [
                        240,
                        "RecoveryCodeValidateInput!"
                    ]
                }
            ],
            "referralInfoUpdate": [
                242,
                {
                    "input": [
                        243,
                        "ReferralInfoUpdateInput!"
                    ]
                }
            ],
            "sendCommunityThreadNotificationEmail": [
                12,
                {
                    "input": [
                        258,
                        "SendCommunityThreadNotificationEmailInput!"
                    ]
                }
            ],
            "serviceConnect": [
                260,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        261,
                        "ServiceConnectInput!"
                    ]
                }
            ],
            "serviceCreate": [
                260,
                {
                    "input": [
                        262,
                        "ServiceCreateInput!"
                    ]
                }
            ],
            "serviceDelete": [
                12,
                {
                    "environmentId": [
                        284
                    ],
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceDisconnect": [
                260,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceDomainCreate": [
                265,
                {
                    "input": [
                        266,
                        "ServiceDomainCreateInput!"
                    ]
                }
            ],
            "serviceDomainDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceDomainUpdate": [
                12,
                {
                    "input": [
                        267,
                        "ServiceDomainUpdateInput!"
                    ]
                }
            ],
            "serviceFeatureFlagAdd": [
                12,
                {
                    "input": [
                        268,
                        "ServiceFeatureFlagToggleInput!"
                    ]
                }
            ],
            "serviceFeatureFlagRemove": [
                12,
                {
                    "input": [
                        268,
                        "ServiceFeatureFlagToggleInput!"
                    ]
                }
            ],
            "serviceInstanceDeploy": [
                12,
                {
                    "commitSha": [
                        284
                    ],
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "latestCommit": [
                        12
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceDeployV2": [
                284,
                {
                    "commitSha": [
                        284
                    ],
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimitsUpdate": [
                12,
                {
                    "input": [
                        271,
                        "ServiceInstanceLimitsUpdateInput!"
                    ]
                }
            ],
            "serviceInstanceRedeploy": [
                12,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceUpdate": [
                12,
                {
                    "environmentId": [
                        284
                    ],
                    "input": [
                        272,
                        "ServiceInstanceUpdateInput!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceRemoveUpstreamUrl": [
                260,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceUpdate": [
                260,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        279,
                        "ServiceUpdateInput!"
                    ]
                }
            ],
            "sessionDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "sharedVariableConfigure": [
                359,
                {
                    "input": [
                        282,
                        "SharedVariableConfigureInput!"
                    ]
                }
            ],
            "tcpProxyCreate": [
                293,
                {
                    "input": [
                        294,
                        "TCPProxyCreateInput!"
                    ]
                }
            ],
            "tcpProxyDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "teamBulkProjectTransfer": [
                12,
                {
                    "input": [
                        296,
                        "TeamBulkProjectTransferInput!"
                    ]
                }
            ],
            "teamCreateAndSubscribe": [
                298,
                {
                    "input": [
                        297,
                        "TeamCreateAndSubscribeInput!"
                    ]
                }
            ],
            "teamInviteCodeCreate": [
                284,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        299,
                        "TeamInviteCodeCreateInput!"
                    ]
                }
            ],
            "teamInviteCodeUse": [
                295,
                {
                    "code": [
                        284,
                        "String!"
                    ]
                }
            ],
            "teamLeave": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "teamPermissionChange": [
                12,
                {
                    "input": [
                        302,
                        "TeamPermissionChangeInput!"
                    ]
                }
            ],
            "teamTrustedDomainCreate": [
                12,
                {
                    "input": [
                        307,
                        "TeamTrustedDomainCreateInput!"
                    ]
                }
            ],
            "teamTrustedDomainDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "teamUserInvite": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        308,
                        "TeamUserInviteInput!"
                    ]
                }
            ],
            "teamUserRemove": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        309,
                        "TeamUserRemoveInput!"
                    ]
                }
            ],
            "templateClone": [
                310,
                {
                    "input": [
                        311,
                        "TemplateCloneInput!"
                    ]
                }
            ],
            "templateDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        314,
                        "TemplateDeleteInput!"
                    ]
                }
            ],
            "templateDeploy": [
                316,
                {
                    "input": [
                        315,
                        "TemplateDeployInput!"
                    ]
                }
            ],
            "templateDeployV2": [
                316,
                {
                    "input": [
                        318,
                        "TemplateDeployV2Input!"
                    ]
                }
            ],
            "templateGenerate": [
                310,
                {
                    "input": [
                        319,
                        "TemplateGenerateInput!"
                    ]
                }
            ],
            "templateMaybeUnsetCommunityThreadSlug": [
                12,
                {
                    "communityThreadSlug": [
                        284,
                        "String!"
                    ]
                }
            ],
            "templatePublish": [
                310,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        322,
                        "TemplatePublishInput!"
                    ]
                }
            ],
            "templateServiceSourceEject": [
                12,
                {
                    "input": [
                        325,
                        "TemplateServiceSourceEjectInput!"
                    ]
                }
            ],
            "templateUnpublish": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "twoFactorInfoCreate": [
                241,
                {
                    "input": [
                        332,
                        "TwoFactorInfoCreateInput!"
                    ]
                }
            ],
            "twoFactorInfoDelete": [
                12
            ],
            "twoFactorInfoSecret": [
                333
            ],
            "twoFactorInfoValidate": [
                12,
                {
                    "input": [
                        334,
                        "TwoFactorInfoValidateInput!"
                    ]
                }
            ],
            "upsertSlackChannelForTeam": [
                12,
                {
                    "teamId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "usageLimitRemove": [
                12,
                {
                    "input": [
                        340,
                        "UsageLimitRemoveInput!"
                    ]
                }
            ],
            "usageLimitSet": [
                12,
                {
                    "input": [
                        341,
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
                        344,
                        "UserFlagsRemoveInput!"
                    ]
                }
            ],
            "userFlagsSet": [
                12,
                {
                    "input": [
                        345,
                        "UserFlagsSetInput!"
                    ]
                }
            ],
            "userProfileUpdate": [
                12,
                {
                    "input": [
                        351,
                        "UserProfileUpdateInput!"
                    ]
                }
            ],
            "userSlackDisconnect": [
                12
            ],
            "userTermsUpdate": [
                342
            ],
            "userUpdate": [
                342,
                {
                    "input": [
                        358,
                        "UserUpdateInput!"
                    ]
                }
            ],
            "variableCollectionUpsert": [
                12,
                {
                    "input": [
                        360,
                        "VariableCollectionUpsertInput!"
                    ]
                }
            ],
            "variableDelete": [
                12,
                {
                    "input": [
                        361,
                        "VariableDeleteInput!"
                    ]
                }
            ],
            "variableUpsert": [
                12,
                {
                    "input": [
                        362,
                        "VariableUpsertInput!"
                    ]
                }
            ],
            "volumeCreate": [
                366,
                {
                    "input": [
                        367,
                        "VolumeCreateInput!"
                    ]
                }
            ],
            "volumeDelete": [
                12,
                {
                    "volumeId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupCreate": [
                384,
                {
                    "volumeInstanceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupDelete": [
                384,
                {
                    "volumeInstanceBackupId": [
                        284,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupLock": [
                12,
                {
                    "volumeInstanceBackupId": [
                        284,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupRestore": [
                384,
                {
                    "volumeInstanceBackupId": [
                        284,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupScheduleUpdate": [
                12,
                {
                    "kinds": [
                        371,
                        "[VolumeInstanceBackupScheduleKind!]!"
                    ],
                    "volumeInstanceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceUpdate": [
                12,
                {
                    "environmentId": [
                        284
                    ],
                    "input": [
                        373,
                        "VolumeInstanceUpdateInput!"
                    ],
                    "volumeId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "volumeUpdate": [
                366,
                {
                    "input": [
                        375,
                        "VolumeUpdateInput!"
                    ],
                    "volumeId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "webhookCreate": [
                192,
                {
                    "input": [
                        378,
                        "WebhookCreateInput!"
                    ]
                }
            ],
            "webhookDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "webhookUpdate": [
                192,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        379,
                        "WebhookUpdateInput!"
                    ]
                }
            ],
            "workspaceDelete": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "workspaceLeave": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "workspaceUpdate": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "input": [
                        388,
                        "WorkspaceUpdateInput!"
                    ]
                }
            ],
            "workspaceUpsertSlackChannel": [
                12,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                284
            ]
        },
        "Node": {
            "id": [
                95
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
                37
            ],
            "on_DeploymentInstanceExecution": [
                40
            ],
            "on_DeploymentSnapshot": [
                47
            ],
            "on_DeploymentTrigger": [
                51
            ],
            "on_Environment": [
                61
            ],
            "on_Event": [
                79
            ],
            "on_Integration": [
                99
            ],
            "on_IntegrationAuth": [
                100
            ],
            "on_InviteCode": [
                105
            ],
            "on_ObservabilityDashboard": [
                122
            ],
            "on_ObservabilityDashboardItem": [
                124
            ],
            "on_ObservabilityDashboardItemInstance": [
                128
            ],
            "on_PlanLimitOverride": [
                135
            ],
            "on_Plugin": [
                137
            ],
            "on_PreferenceOverride": [
                147
            ],
            "on_Preferences": [
                150
            ],
            "on_Project": [
                156
            ],
            "on_ProjectPermission": [
                174
            ],
            "on_ProjectToken": [
                183
            ],
            "on_ProjectWebhook": [
                192
            ],
            "on_ProviderAuth": [
                195
            ],
            "on_ReferralInfo": [
                242
            ],
            "on_RefundRequest": [
                247
            ],
            "on_Service": [
                260
            ],
            "on_ServiceInstance": [
                269
            ],
            "on_Session": [
                280
            ],
            "on_Team": [
                295
            ],
            "on_TeamPermission": [
                301
            ],
            "on_TeamTrustedDomain": [
                306
            ],
            "on_Template": [
                310
            ],
            "on_TemplateService": [
                323
            ],
            "on_UsageAnomaly": [
                336
            ],
            "on_UsageLimit": [
                339
            ],
            "on_User": [
                342
            ],
            "on_Variable": [
                359
            ],
            "on_Volume": [
                366
            ],
            "on_VolumeInstance": [
                368
            ],
            "on_VolumeInstanceBackupSchedule": [
                370
            ],
            "on_Withdrawal": [
                380
            ],
            "on_WithdrawalAccount": [
                381
            ],
            "on_Workspace": [
                387
            ],
            "__typename": [
                284
            ]
        },
        "ObservabilityDashboard": {
            "id": [
                95
            ],
            "items": [
                128
            ],
            "__typename": [
                284
            ]
        },
        "ObservabilityDashboardCreateInput": {
            "environmentId": [
                284
            ],
            "items": [
                130
            ],
            "__typename": [
                284
            ]
        },
        "ObservabilityDashboardItem": {
            "config": [
                125
            ],
            "description": [
                284
            ],
            "id": [
                95
            ],
            "name": [
                284
            ],
            "type": [
                129
            ],
            "__typename": [
                284
            ]
        },
        "ObservabilityDashboardItemConfig": {
            "logsFilter": [
                284
            ],
            "measurements": [
                116
            ],
            "projectUsageProperties": [
                189
            ],
            "resourceIds": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ObservabilityDashboardItemConfigInput": {
            "logsFilter": [
                284
            ],
            "measurements": [
                116
            ],
            "projectUsageProperties": [
                189
            ],
            "resourceIds": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ObservabilityDashboardItemCreateInput": {
            "config": [
                126
            ],
            "description": [
                284
            ],
            "id": [
                284
            ],
            "name": [
                284
            ],
            "type": [
                129
            ],
            "__typename": [
                284
            ]
        },
        "ObservabilityDashboardItemInstance": {
            "dashboardItem": [
                124
            ],
            "displayConfig": [
                54
            ],
            "id": [
                95
            ],
            "__typename": [
                284
            ]
        },
        "ObservabilityDashboardItemType": {},
        "ObservabilityDashboardUpdateInput": {
            "dashboardItem": [
                127
            ],
            "displayConfig": [
                54
            ],
            "id": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "OverrideInput": {
            "enabled": [
                12
            ],
            "name": [
                284
            ],
            "resource": [
                284
            ],
            "resourceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PageInfo": {
            "endCursor": [
                284
            ],
            "hasNextPage": [
                12
            ],
            "hasPreviousPage": [
                12
            ],
            "startCursor": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PaymentMethod": {
            "card": [
                134
            ],
            "id": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PaymentMethodCard": {
            "brand": [
                284
            ],
            "country": [
                284
            ],
            "last4": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PlanLimitOverride": {
            "config": [
                289
            ],
            "id": [
                95
            ],
            "__typename": [
                284
            ]
        },
        "PlatformStatus": {
            "incident": [
                96
            ],
            "isStable": [
                12
            ],
            "maintenance": [
                113
            ],
            "__typename": [
                284
            ]
        },
        "Plugin": {
            "containers": [
                138,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
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
                284
            ],
            "id": [
                95
            ],
            "logsEnabled": [
                12
            ],
            "migrationDatabaseServiceId": [
                284
            ],
            "name": [
                143
            ],
            "project": [
                156
            ],
            "status": [
                142
            ],
            "variables": [
                145,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "__typename": [
                284
            ]
        },
        "PluginContainersConnection": {
            "edges": [
                139
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "PluginContainersConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                20
            ],
            "__typename": [
                284
            ]
        },
        "PluginCreateInput": {
            "environmentId": [
                284
            ],
            "friendlyName": [
                284
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PluginRestartInput": {
            "environmentId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PluginStatus": {},
        "PluginType": {},
        "PluginUpdateInput": {
            "friendlyName": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PluginVariablesConnection": {
            "edges": [
                146
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "PluginVariablesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                359
            ],
            "__typename": [
                284
            ]
        },
        "PreferenceOverride": {
            "enabled": [
                12
            ],
            "id": [
                95
            ],
            "name": [
                284
            ],
            "resource": [
                284
            ],
            "resourceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PreferenceOverridesCreateUpdateData": {
            "overrides": [
                131
            ],
            "__typename": [
                284
            ]
        },
        "PreferenceOverridesDestroyData": {
            "resource": [
                284
            ],
            "resourceId": [
                284
            ],
            "__typename": [
                284
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
                95
            ],
            "marketingEmail": [
                12
            ],
            "preferenceOverrides": [
                147
            ],
            "subprocessorUpdatesEmail": [
                12
            ],
            "usageEmail": [
                12
            ],
            "__typename": [
                284
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
                284
            ],
            "usageEmail": [
                12
            ],
            "__typename": [
                284
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
                284
            ],
            "environmentId": [
                284
            ],
            "name": [
                284
            ],
            "networkId": [
                10
            ],
            "projectId": [
                284
            ],
            "publicId": [
                284
            ],
            "tags": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PrivateNetworkCreateOrGetInput": {
            "environmentId": [
                284
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "tags": [
                284
            ],
            "__typename": [
                284
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
                284
            ],
            "privateIps": [
                284
            ],
            "publicId": [
                284
            ],
            "serviceInstanceId": [
                284
            ],
            "tags": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PrivateNetworkEndpointCreateOrGetInput": {
            "environmentId": [
                284
            ],
            "privateNetworkId": [
                284
            ],
            "serviceId": [
                284
            ],
            "serviceName": [
                284
            ],
            "tags": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "Project": {
            "baseEnvironment": [
                61
            ],
            "baseEnvironmentId": [
                284
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
                159,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "deployments": [
                161,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "description": [
                284
            ],
            "environments": [
                163,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "expiredAt": [
                35
            ],
            "groups": [
                165,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "id": [
                95
            ],
            "isPublic": [
                12
            ],
            "isTempProject": [
                12
            ],
            "members": [
                171
            ],
            "name": [
                284
            ],
            "plugins": [
                175,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
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
                177,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "services": [
                181,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "subscriptionPlanLimit": [
                289
            ],
            "subscriptionType": [
                290
            ],
            "team": [
                295
            ],
            "teamId": [
                284
            ],
            "updatedAt": [
                35
            ],
            "volumes": [
                190,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "webhooks": [
                193,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "__typename": [
                284
            ]
        },
        "ProjectCreateInput": {
            "defaultEnvironmentName": [
                284
            ],
            "description": [
                284
            ],
            "isPublic": [
                12
            ],
            "name": [
                284
            ],
            "plugins": [
                284
            ],
            "prDeploys": [
                12
            ],
            "repo": [
                158
            ],
            "runtime": [
                198
            ],
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectCreateRepo": {
            "branch": [
                284
            ],
            "fullRepoName": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectDeploymentTriggersConnection": {
            "edges": [
                160
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ProjectDeploymentTriggersConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                51
            ],
            "__typename": [
                284
            ]
        },
        "ProjectDeploymentsConnection": {
            "edges": [
                162
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ProjectDeploymentsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                36
            ],
            "__typename": [
                284
            ]
        },
        "ProjectEnvironmentsConnection": {
            "edges": [
                164
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ProjectEnvironmentsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                61
            ],
            "__typename": [
                284
            ]
        },
        "ProjectGroupsConnection": {
            "edges": [
                166
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ProjectGroupsConnectionEdge": {
            "cursor": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectInvitation": {
            "email": [
                284
            ],
            "expiresAt": [
                35
            ],
            "id": [
                95
            ],
            "inviter": [
                168
            ],
            "isExpired": [
                12
            ],
            "project": [
                196
            ],
            "__typename": [
                284
            ]
        },
        "ProjectInvitationInviter": {
            "email": [
                284
            ],
            "name": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectInviteUserInput": {
            "email": [
                284
            ],
            "link": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectInvitee": {
            "email": [
                284
            ],
            "role": [
                180
            ],
            "__typename": [
                284
            ]
        },
        "ProjectMember": {
            "avatar": [
                284
            ],
            "email": [
                284
            ],
            "id": [
                284
            ],
            "name": [
                284
            ],
            "role": [
                180
            ],
            "__typename": [
                284
            ]
        },
        "ProjectMemberRemoveInput": {
            "projectId": [
                284
            ],
            "userId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectMemberUpdateInput": {
            "projectId": [
                284
            ],
            "role": [
                180
            ],
            "userId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectPermission": {
            "id": [
                95
            ],
            "projectId": [
                284
            ],
            "role": [
                180
            ],
            "userId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectPluginsConnection": {
            "edges": [
                176
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ProjectPluginsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                137
            ],
            "__typename": [
                284
            ]
        },
        "ProjectProjectPermissionsConnection": {
            "edges": [
                178
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ProjectProjectPermissionsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                174
            ],
            "__typename": [
                284
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
                284
            ]
        },
        "ProjectRole": {},
        "ProjectServicesConnection": {
            "edges": [
                182
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ProjectServicesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                260
            ],
            "__typename": [
                284
            ]
        },
        "ProjectToken": {
            "createdAt": [
                35
            ],
            "displayToken": [
                284
            ],
            "environment": [
                61
            ],
            "environmentId": [
                284
            ],
            "id": [
                95
            ],
            "name": [
                284
            ],
            "project": [
                156
            ],
            "projectId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectTokenCreateInput": {
            "environmentId": [
                284
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectTransferConfirmInput": {
            "destinationWorkspaceId": [
                284
            ],
            "ownershipTransferId": [
                284
            ],
            "projectId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectTransferInitiateInput": {
            "memberId": [
                284
            ],
            "projectId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectTransferToTeamInput": {
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectUpdateInput": {
            "baseEnvironmentId": [
                284
            ],
            "botPrEnvironments": [
                12
            ],
            "description": [
                284
            ],
            "isPublic": [
                12
            ],
            "name": [
                284
            ],
            "prDeploys": [
                12
            ],
            "prEnvCopyVolData": [
                12
            ],
            "__typename": [
                284
            ]
        },
        "ProjectUsageProperty": {},
        "ProjectVolumesConnection": {
            "edges": [
                191
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ProjectVolumesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                366
            ],
            "__typename": [
                284
            ]
        },
        "ProjectWebhook": {
            "filters": [
                284
            ],
            "id": [
                95
            ],
            "lastStatus": [
                98
            ],
            "projectId": [
                284
            ],
            "url": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ProjectWebhooksConnection": {
            "edges": [
                194
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ProjectWebhooksConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                192
            ],
            "__typename": [
                284
            ]
        },
        "ProviderAuth": {
            "email": [
                284
            ],
            "id": [
                95
            ],
            "metadata": [
                106
            ],
            "provider": [
                284
            ],
            "userId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PublicProjectInformation": {
            "id": [
                95
            ],
            "name": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "PublicProjectInvitation": {
            "on_InviteCode": [
                105
            ],
            "on_ProjectInvitation": [
                167
            ],
            "on_Node": [
                121
            ],
            "__typename": [
                284
            ]
        },
        "PublicRuntime": {},
        "PublicStats": {
            "totalDeploymentsLastMonth": [
                98
            ],
            "totalLogsLastMonth": [
                10
            ],
            "totalProjects": [
                98
            ],
            "totalRequestsLastMonth": [
                10
            ],
            "totalServices": [
                98
            ],
            "totalUsers": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "Query": {
            "adminVolumeInstancesForVolume": [
                368,
                {
                    "volumeId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "apiTokens": [
                201,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "buildLogs": [
                109,
                {
                    "deploymentId": [
                        284,
                        "String!"
                    ],
                    "endDate": [
                        35
                    ],
                    "filter": [
                        284
                    ],
                    "limit": [
                        98
                    ],
                    "startDate": [
                        35
                    ]
                }
            ],
            "changelogBlockImage": [
                284,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "customDomain": [
                23,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "customDomainAvailable": [
                56,
                {
                    "domain": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deployment": [
                36,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deploymentEvents": [
                203,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "id": [
                        284,
                        "String!"
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "deploymentInstanceExecutions": [
                205,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "input": [
                        43,
                        "DeploymentInstanceExecutionListInput!"
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "deploymentLogs": [
                109,
                {
                    "deploymentId": [
                        284,
                        "String!"
                    ],
                    "endDate": [
                        35
                    ],
                    "filter": [
                        284
                    ],
                    "limit": [
                        98
                    ],
                    "startDate": [
                        35
                    ]
                }
            ],
            "deploymentSnapshot": [
                47,
                {
                    "deploymentId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggers": [
                207,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deployments": [
                209,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "input": [
                        45,
                        "DeploymentListInput!"
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "domainStatus": [
                57,
                {
                    "id": [
                        284,
                        "String!"
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "domains": [
                5,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "egressGateways": [
                58,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "environment": [
                61,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "environmentLogs": [
                109,
                {
                    "afterDate": [
                        284
                    ],
                    "afterLimit": [
                        98
                    ],
                    "anchorDate": [
                        284
                    ],
                    "beforeDate": [
                        284
                    ],
                    "beforeLimit": [
                        98
                    ],
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "filter": [
                        284
                    ]
                }
            ],
            "environmentPatches": [
                211,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "environments": [
                213,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "isEphemeral": [
                        12
                    ],
                    "last": [
                        98
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "estimatedUsage": [
                78,
                {
                    "includeDeleted": [
                        12
                    ],
                    "measurements": [
                        116,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        284
                    ],
                    "teamId": [
                        284
                    ]
                }
            ],
            "events": [
                215,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "environmentId": [
                        284
                    ],
                    "filter": [
                        80
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "externalWorkspaces": [
                83,
                {
                    "projectId": [
                        284
                    ]
                }
            ],
            "gitHubRepoAccessAvailable": [
                86,
                {
                    "fullRepoName": [
                        284,
                        "String!"
                    ]
                }
            ],
            "githubIsRepoNameAvailable": [
                12,
                {
                    "fullRepoName": [
                        284,
                        "String!"
                    ]
                }
            ],
            "githubRepo": [
                91,
                {
                    "fullRepoName": [
                        284,
                        "String!"
                    ]
                }
            ],
            "githubRepoBranches": [
                87,
                {
                    "owner": [
                        284,
                        "String!"
                    ],
                    "repo": [
                        284,
                        "String!"
                    ]
                }
            ],
            "githubRepos": [
                88
            ],
            "githubWritableScopes": [
                284
            ],
            "herokuApps": [
                92
            ],
            "httpLogs": [
                94,
                {
                    "afterDate": [
                        284
                    ],
                    "afterLimit": [
                        98
                    ],
                    "anchorDate": [
                        284
                    ],
                    "beforeDate": [
                        284
                    ],
                    "beforeLimit": [
                        98
                    ],
                    "deploymentId": [
                        284,
                        "String!"
                    ],
                    "endDate": [
                        284
                    ],
                    "filter": [
                        284
                    ],
                    "limit": [
                        98
                    ],
                    "startDate": [
                        284
                    ]
                }
            ],
            "integrationAuth": [
                100,
                {
                    "provider": [
                        284,
                        "String!"
                    ],
                    "providerId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "integrationAuths": [
                217,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "integrations": [
                219,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "inviteCode": [
                105,
                {
                    "code": [
                        284,
                        "String!"
                    ]
                }
            ],
            "me": [
                342
            ],
            "metrics": [
                119,
                {
                    "averagingWindowSeconds": [
                        98
                    ],
                    "endDate": [
                        35
                    ],
                    "environmentId": [
                        284
                    ],
                    "groupBy": [
                        117,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        12
                    ],
                    "measurements": [
                        116,
                        "[MetricMeasurement!]!"
                    ],
                    "pluginId": [
                        284
                    ],
                    "projectId": [
                        284
                    ],
                    "sampleRateSeconds": [
                        98
                    ],
                    "serviceId": [
                        284
                    ],
                    "startDate": [
                        35,
                        "DateTime!"
                    ],
                    "teamId": [
                        284
                    ],
                    "volumeId": [
                        284
                    ],
                    "workspaceId": [
                        284
                    ]
                }
            ],
            "node": [
                121,
                {
                    "id": [
                        95,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                121,
                {
                    "ids": [
                        95,
                        "[ID!]!"
                    ]
                }
            ],
            "observabilityDashboards": [
                221,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "platformStatus": [
                136
            ],
            "plugin": [
                137,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "pluginLogs": [
                109,
                {
                    "endDate": [
                        35
                    ],
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "filter": [
                        284
                    ],
                    "limit": [
                        98
                    ],
                    "pluginId": [
                        284,
                        "String!"
                    ],
                    "startDate": [
                        35
                    ]
                }
            ],
            "preferences": [
                150,
                {
                    "token": [
                        284
                    ]
                }
            ],
            "privateNetworkEndpoint": [
                154,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "privateNetworkId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointNameAvailable": [
                12,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "prefix": [
                        284,
                        "String!"
                    ],
                    "privateNetworkId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "privateNetworks": [
                152,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "project": [
                156,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectInvitation": [
                197,
                {
                    "code": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectInvitations": [
                167,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectInviteCode": [
                105,
                {
                    "projectId": [
                        284,
                        "String!"
                    ],
                    "role": [
                        180,
                        "ProjectRole!"
                    ]
                }
            ],
            "projectMembers": [
                171,
                {
                    "projectId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectResourceAccess": [
                179,
                {
                    "projectId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projectToken": [
                183
            ],
            "projectTokens": [
                223,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "projects": [
                225,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "includeDeleted": [
                        12
                    ],
                    "last": [
                        98
                    ],
                    "teamId": [
                        284
                    ],
                    "userId": [
                        284
                    ]
                }
            ],
            "publicStats": [
                199
            ],
            "referralInfo": [
                242,
                {
                    "workspaceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "regions": [
                249,
                {
                    "projectId": [
                        284
                    ]
                }
            ],
            "resourceAccess": [
                255,
                {
                    "explicitResourceOwner": [
                        82,
                        "ExplicitOwnerInput!"
                    ]
                }
            ],
            "service": [
                260,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceDomainAvailable": [
                56,
                {
                    "domain": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceInstance": [
                269,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceIsUpdatable": [
                12,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimitOverride": [
                270,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimits": [
                270,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "sessions": [
                227,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "tcpProxies": [
                293,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "team": [
                295,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "teamByCode": [
                295,
                {
                    "code": [
                        284,
                        "String!"
                    ]
                }
            ],
            "teamTemplates": [
                229,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ],
                    "teamId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "teamTrustedDomains": [
                231,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ],
                    "teamId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "template": [
                310,
                {
                    "code": [
                        284
                    ],
                    "owner": [
                        284
                    ],
                    "repo": [
                        284
                    ]
                }
            ],
            "templateSourceForProject": [
                310,
                {
                    "projectId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "templates": [
                233,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ],
                    "recommended": [
                        12
                    ]
                }
            ],
            "templatesCount": [
                98
            ],
            "twoFactorInfo": [
                331
            ],
            "usage": [
                4,
                {
                    "endDate": [
                        35
                    ],
                    "groupBy": [
                        117,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        12
                    ],
                    "measurements": [
                        116,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        284
                    ],
                    "startDate": [
                        35
                    ],
                    "teamId": [
                        284
                    ]
                }
            ],
            "userIdForDiscordId": [
                284,
                {
                    "discordId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "userIdForSlackId": [
                284,
                {
                    "slackId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "userKickbackEarnings": [
                346,
                {
                    "userId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "userProfile": [
                348,
                {
                    "username": [
                        284,
                        "String!"
                    ]
                }
            ],
            "userTemplates": [
                235,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "variables": [
                72,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "pluginId": [
                        284
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284
                    ],
                    "unrendered": [
                        12
                    ]
                }
            ],
            "variablesForServiceDeployment": [
                72,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ],
                    "serviceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "vercelInfo": [
                364
            ],
            "volumeInstance": [
                368,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupList": [
                369,
                {
                    "volumeInstanceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupScheduleList": [
                370,
                {
                    "volumeInstanceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "webhooks": [
                237,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ],
                    "projectId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "workflowStatus": [
                385,
                {
                    "workflowId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "workspace": [
                387,
                {
                    "workspaceId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                284
            ]
        },
        "QueryApiTokensConnection": {
            "edges": [
                202
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryApiTokensConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                6
            ],
            "__typename": [
                284
            ]
        },
        "QueryDeploymentEventsConnection": {
            "edges": [
                204
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryDeploymentEventsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                37
            ],
            "__typename": [
                284
            ]
        },
        "QueryDeploymentInstanceExecutionsConnection": {
            "edges": [
                206
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryDeploymentInstanceExecutionsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                40
            ],
            "__typename": [
                284
            ]
        },
        "QueryDeploymentTriggersConnection": {
            "edges": [
                208
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryDeploymentTriggersConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                51
            ],
            "__typename": [
                284
            ]
        },
        "QueryDeploymentsConnection": {
            "edges": [
                210
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryDeploymentsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                36
            ],
            "__typename": [
                284
            ]
        },
        "QueryEnvironmentPatchesConnection": {
            "edges": [
                212
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryEnvironmentPatchesConnectionEdge": {
            "cursor": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "QueryEnvironmentsConnection": {
            "edges": [
                214
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryEnvironmentsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                61
            ],
            "__typename": [
                284
            ]
        },
        "QueryEventsConnection": {
            "edges": [
                216
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryEventsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                79
            ],
            "__typename": [
                284
            ]
        },
        "QueryIntegrationAuthsConnection": {
            "edges": [
                218
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryIntegrationAuthsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                100
            ],
            "__typename": [
                284
            ]
        },
        "QueryIntegrationsConnection": {
            "edges": [
                220
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryIntegrationsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                99
            ],
            "__typename": [
                284
            ]
        },
        "QueryObservabilityDashboardsConnection": {
            "edges": [
                222
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryObservabilityDashboardsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                122
            ],
            "__typename": [
                284
            ]
        },
        "QueryProjectTokensConnection": {
            "edges": [
                224
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryProjectTokensConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                183
            ],
            "__typename": [
                284
            ]
        },
        "QueryProjectsConnection": {
            "edges": [
                226
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryProjectsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                156
            ],
            "__typename": [
                284
            ]
        },
        "QuerySessionsConnection": {
            "edges": [
                228
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QuerySessionsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                280
            ],
            "__typename": [
                284
            ]
        },
        "QueryTeamTemplatesConnection": {
            "edges": [
                230
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryTeamTemplatesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                310
            ],
            "__typename": [
                284
            ]
        },
        "QueryTeamTrustedDomainsConnection": {
            "edges": [
                232
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryTeamTrustedDomainsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                306
            ],
            "__typename": [
                284
            ]
        },
        "QueryTemplatesConnection": {
            "edges": [
                234
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryTemplatesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                310
            ],
            "__typename": [
                284
            ]
        },
        "QueryUserTemplatesConnection": {
            "edges": [
                236
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryUserTemplatesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                310
            ],
            "__typename": [
                284
            ]
        },
        "QueryWebhooksConnection": {
            "edges": [
                238
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "QueryWebhooksConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                192
            ],
            "__typename": [
                284
            ]
        },
        "RailpackInfo": {},
        "RecoveryCodeValidateInput": {
            "code": [
                284
            ],
            "twoFactorLinkingKey": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "RecoveryCodes": {
            "recoveryCodes": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ReferralInfo": {
            "code": [
                284
            ],
            "id": [
                95
            ],
            "referralStats": [
                244
            ],
            "status": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ReferralInfoUpdateInput": {
            "code": [
                284
            ],
            "workspaceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ReferralStats": {
            "credited": [
                98
            ],
            "pending": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "ReferralStatus": {},
        "ReferralUser": {
            "code": [
                284
            ],
            "id": [
                284
            ],
            "status": [
                245
            ],
            "__typename": [
                284
            ]
        },
        "RefundRequest": {
            "amount": [
                98
            ],
            "decision": [
                248
            ],
            "id": [
                95
            ],
            "invoiceId": [
                284
            ],
            "plainThreadId": [
                284
            ],
            "reason": [
                284
            ],
            "userId": [
                284
            ],
            "workspace": [
                387
            ],
            "__typename": [
                284
            ]
        },
        "RefundRequestDecisionEnum": {},
        "Region": {
            "country": [
                284
            ],
            "deploymentConstraints": [
                250
            ],
            "location": [
                284
            ],
            "name": [
                284
            ],
            "railwayMetal": [
                12
            ],
            "region": [
                284
            ],
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "RegionDeploymentConstraints": {
            "adminOnly": [
                12
            ],
            "runtimeExclusivity": [
                284
            ],
            "stagingOnly": [
                12
            ],
            "__typename": [
                284
            ]
        },
        "RegistrationStatus": {},
        "RegistryCredentialsInput": {
            "password": [
                284
            ],
            "username": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ResetPluginCredentialsInput": {
            "environmentId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ResetPluginInput": {
            "environmentId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ResourceAccess": {
            "project": [
                0
            ],
            "__typename": [
                284
            ]
        },
        "ResourceOwnerType": {},
        "RestartPolicyType": {},
        "SendCommunityThreadNotificationEmailInput": {
            "postEntryContent": [
                284
            ],
            "threadTitle": [
                284
            ],
            "threadUrl": [
                284
            ],
            "userIds": [
                284
            ],
            "__typename": [
                284
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
                263,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "featureFlags": [
                2
            ],
            "icon": [
                284
            ],
            "id": [
                95
            ],
            "name": [
                284
            ],
            "project": [
                156
            ],
            "projectId": [
                284
            ],
            "repoTriggers": [
                273,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "serviceInstances": [
                275,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "templateServiceId": [
                284
            ],
            "templateThreadSlug": [
                284
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                284
            ]
        },
        "ServiceConnectInput": {
            "branch": [
                284
            ],
            "image": [
                284
            ],
            "repo": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ServiceCreateInput": {
            "branch": [
                284
            ],
            "environmentId": [
                284
            ],
            "icon": [
                284
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "registryCredentials": [
                252
            ],
            "source": [
                278
            ],
            "templateServiceId": [
                284
            ],
            "variables": [
                72
            ],
            "__typename": [
                284
            ]
        },
        "ServiceDeploymentsConnection": {
            "edges": [
                264
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ServiceDeploymentsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                36
            ],
            "__typename": [
                284
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
                284
            ],
            "edgeId": [
                284
            ],
            "environmentId": [
                284
            ],
            "id": [
                95
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "suffix": [
                284
            ],
            "targetPort": [
                98
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                284
            ]
        },
        "ServiceDomainCreateInput": {
            "environmentId": [
                284
            ],
            "serviceId": [
                284
            ],
            "targetPort": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "ServiceDomainUpdateInput": {
            "domain": [
                284
            ],
            "environmentId": [
                284
            ],
            "serviceDomainId": [
                284
            ],
            "serviceId": [
                284
            ],
            "targetPort": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "ServiceFeatureFlagToggleInput": {
            "flag": [
                2
            ],
            "serviceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ServiceInstance": {
            "buildCommand": [
                284
            ],
            "builder": [
                13
            ],
            "createdAt": [
                35
            ],
            "cronSchedule": [
                284
            ],
            "deletedAt": [
                35
            ],
            "domains": [
                5
            ],
            "environmentId": [
                284
            ],
            "healthcheckPath": [
                284
            ],
            "healthcheckTimeout": [
                98
            ],
            "id": [
                95
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
                106
            ],
            "numReplicas": [
                98
            ],
            "preDeployCommand": [
                106
            ],
            "railpackInfo": [
                239
            ],
            "railwayConfigFile": [
                284
            ],
            "region": [
                284
            ],
            "restartPolicyMaxRetries": [
                98
            ],
            "restartPolicyType": [
                257
            ],
            "rootDirectory": [
                284
            ],
            "serviceId": [
                284
            ],
            "serviceName": [
                284
            ],
            "sleepApplication": [
                12
            ],
            "source": [
                277
            ],
            "startCommand": [
                284
            ],
            "updatedAt": [
                35
            ],
            "upstreamUrl": [
                284
            ],
            "watchPatterns": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ServiceInstanceLimit": {},
        "ServiceInstanceLimitsUpdateInput": {
            "environmentId": [
                284
            ],
            "memoryGB": [
                85
            ],
            "serviceId": [
                284
            ],
            "vCPUs": [
                85
            ],
            "__typename": [
                284
            ]
        },
        "ServiceInstanceUpdateInput": {
            "buildCommand": [
                284
            ],
            "builder": [
                13
            ],
            "cronSchedule": [
                284
            ],
            "healthcheckPath": [
                284
            ],
            "healthcheckTimeout": [
                98
            ],
            "multiRegionConfig": [
                106
            ],
            "nixpacksPlan": [
                106
            ],
            "numReplicas": [
                98
            ],
            "preDeployCommand": [
                284
            ],
            "railwayConfigFile": [
                284
            ],
            "region": [
                284
            ],
            "registryCredentials": [
                252
            ],
            "restartPolicyMaxRetries": [
                98
            ],
            "restartPolicyType": [
                257
            ],
            "rootDirectory": [
                284
            ],
            "sleepApplication": [
                12
            ],
            "source": [
                278
            ],
            "startCommand": [
                284
            ],
            "watchPatterns": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ServiceRepoTriggersConnection": {
            "edges": [
                274
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ServiceRepoTriggersConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                51
            ],
            "__typename": [
                284
            ]
        },
        "ServiceServiceInstancesConnection": {
            "edges": [
                276
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "ServiceServiceInstancesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                269
            ],
            "__typename": [
                284
            ]
        },
        "ServiceSource": {
            "image": [
                284
            ],
            "repo": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ServiceSourceInput": {
            "image": [
                284
            ],
            "repo": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "ServiceUpdateInput": {
            "icon": [
                284
            ],
            "name": [
                284
            ],
            "__typename": [
                284
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
                95
            ],
            "isCurrent": [
                12
            ],
            "name": [
                284
            ],
            "type": [
                281
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                284
            ]
        },
        "SessionType": {},
        "SharedVariableConfigureInput": {
            "disabledServiceIds": [
                284
            ],
            "enabledServiceIds": [
                284
            ],
            "environmentId": [
                284
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "SimilarTemplate": {
            "code": [
                284
            ],
            "createdAt": [
                35
            ],
            "creator": [
                313
            ],
            "deploys": [
                98
            ],
            "description": [
                284
            ],
            "health": [
                85
            ],
            "image": [
                284
            ],
            "name": [
                284
            ],
            "teamId": [
                284
            ],
            "userId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "String": {},
        "Subscription": {
            "buildLogs": [
                109,
                {
                    "deploymentId": [
                        284,
                        "String!"
                    ],
                    "filter": [
                        284
                    ],
                    "limit": [
                        98
                    ]
                }
            ],
            "deployment": [
                36,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deploymentEvents": [
                37,
                {
                    "id": [
                        284,
                        "String!"
                    ]
                }
            ],
            "deploymentInstanceExecutions": [
                40,
                {
                    "input": [
                        42,
                        "DeploymentInstanceExecutionInput!"
                    ]
                }
            ],
            "deploymentLogs": [
                109,
                {
                    "deploymentId": [
                        284,
                        "String!"
                    ],
                    "filter": [
                        284
                    ],
                    "limit": [
                        98
                    ]
                }
            ],
            "environmentLogs": [
                109,
                {
                    "afterDate": [
                        284
                    ],
                    "afterLimit": [
                        98
                    ],
                    "anchorDate": [
                        284
                    ],
                    "beforeDate": [
                        284
                    ],
                    "beforeLimit": [
                        98
                    ],
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "filter": [
                        284
                    ]
                }
            ],
            "httpLogs": [
                94,
                {
                    "afterDate": [
                        284
                    ],
                    "afterLimit": [
                        98
                    ],
                    "anchorDate": [
                        284
                    ],
                    "beforeDate": [
                        284
                    ],
                    "beforeLimit": [
                        98
                    ],
                    "deploymentId": [
                        284,
                        "String!"
                    ],
                    "filter": [
                        284
                    ]
                }
            ],
            "pluginLogs": [
                109,
                {
                    "environmentId": [
                        284,
                        "String!"
                    ],
                    "filter": [
                        284
                    ],
                    "limit": [
                        98
                    ],
                    "pluginId": [
                        284,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                284
            ]
        },
        "SubscriptionDiscount": {
            "couponId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "SubscriptionItem": {
            "itemId": [
                284
            ],
            "priceId": [
                284
            ],
            "productId": [
                284
            ],
            "quantity": [
                10
            ],
            "__typename": [
                284
            ]
        },
        "SubscriptionModel": {},
        "SubscriptionPlanLimit": {},
        "SubscriptionPlanType": {},
        "SubscriptionState": {},
        "SupportTierOverride": {},
        "TCPProxy": {
            "applicationPort": [
                98
            ],
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "domain": [
                284
            ],
            "environmentId": [
                284
            ],
            "id": [
                95
            ],
            "proxyPort": [
                98
            ],
            "serviceId": [
                284
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                284
            ]
        },
        "TCPProxyCreateInput": {
            "applicationPort": [
                98
            ],
            "environmentId": [
                284
            ],
            "serviceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "Team": {
            "adoptionHistory": [
                3
            ],
            "adoptionLevel": [
                85
            ],
            "avatar": [
                284
            ],
            "createdAt": [
                35
            ],
            "customer": [
                26
            ],
            "id": [
                95
            ],
            "members": [
                300
            ],
            "name": [
                284
            ],
            "preferredRegion": [
                284
            ],
            "projects": [
                303,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "slackChannelId": [
                284
            ],
            "supportTierOverride": [
                292
            ],
            "teamPermissions": [
                301
            ],
            "updatedAt": [
                35
            ],
            "workspace": [
                387
            ],
            "__typename": [
                284
            ]
        },
        "TeamBulkProjectTransferInput": {
            "projectIds": [
                284
            ],
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TeamCreateAndSubscribeInput": {
            "avatar": [
                284
            ],
            "name": [
                284
            ],
            "paymentMethodId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TeamCreateAndSubscribeResponse": {
            "customerId": [
                284
            ],
            "paymentIntent": [
                106
            ],
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TeamInviteCodeCreateInput": {
            "role": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TeamMember": {
            "avatar": [
                284
            ],
            "email": [
                284
            ],
            "featureFlags": [
                1
            ],
            "id": [
                284
            ],
            "name": [
                284
            ],
            "role": [
                305
            ],
            "__typename": [
                284
            ]
        },
        "TeamPermission": {
            "createdAt": [
                35
            ],
            "id": [
                95
            ],
            "role": [
                305
            ],
            "teamId": [
                284
            ],
            "updatedAt": [
                35
            ],
            "userId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TeamPermissionChangeInput": {
            "role": [
                305
            ],
            "teamId": [
                284
            ],
            "userId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TeamProjectsConnection": {
            "edges": [
                304
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "TeamProjectsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                156
            ],
            "__typename": [
                284
            ]
        },
        "TeamRole": {},
        "TeamTrustedDomain": {
            "domainName": [
                284
            ],
            "id": [
                95
            ],
            "teamId": [
                284
            ],
            "teamRole": [
                284
            ],
            "verificationData": [
                330
            ],
            "verificationType": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TeamTrustedDomainCreateInput": {
            "domainName": [
                284
            ],
            "teamId": [
                284
            ],
            "teamRole": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TeamUserInviteInput": {
            "code": [
                284
            ],
            "email": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TeamUserRemoveInput": {
            "userId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "Template": {
            "activeProjects": [
                98
            ],
            "canvasConfig": [
                15
            ],
            "category": [
                284
            ],
            "code": [
                284
            ],
            "communityThreadSlug": [
                284
            ],
            "config": [
                312
            ],
            "createdAt": [
                35
            ],
            "creator": [
                313
            ],
            "demoProjectId": [
                284
            ],
            "description": [
                284
            ],
            "guides": [
                320
            ],
            "health": [
                85
            ],
            "id": [
                95
            ],
            "image": [
                284
            ],
            "isApproved": [
                12
            ],
            "isV2Template": [
                12
            ],
            "languages": [
                284
            ],
            "metadata": [
                321
            ],
            "name": [
                284
            ],
            "projects": [
                98
            ],
            "readme": [
                284
            ],
            "serializedConfig": [
                259
            ],
            "services": [
                326,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "similarTemplates": [
                283
            ],
            "status": [
                328
            ],
            "tags": [
                284
            ],
            "teamId": [
                284
            ],
            "totalPayout": [
                85
            ],
            "__typename": [
                284
            ]
        },
        "TemplateCloneInput": {
            "code": [
                284
            ],
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TemplateConfig": {},
        "TemplateCreator": {
            "avatar": [
                284
            ],
            "hasPublicProfile": [
                12
            ],
            "name": [
                284
            ],
            "username": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TemplateDeleteInput": {
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TemplateDeployInput": {
            "environmentId": [
                284
            ],
            "projectId": [
                284
            ],
            "services": [
                317
            ],
            "teamId": [
                284
            ],
            "templateCode": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TemplateDeployPayload": {
            "projectId": [
                284
            ],
            "workflowId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TemplateDeployService": {
            "commit": [
                284
            ],
            "hasDomain": [
                12
            ],
            "healthcheckPath": [
                284
            ],
            "id": [
                284
            ],
            "isPrivate": [
                12
            ],
            "name": [
                284
            ],
            "owner": [
                284
            ],
            "preDeployCommand": [
                284
            ],
            "rootDirectory": [
                284
            ],
            "serviceIcon": [
                284
            ],
            "serviceName": [
                284
            ],
            "startCommand": [
                284
            ],
            "tcpProxyApplicationPort": [
                98
            ],
            "template": [
                284
            ],
            "variables": [
                72
            ],
            "volumes": [
                329
            ],
            "__typename": [
                284
            ]
        },
        "TemplateDeployV2Input": {
            "environmentId": [
                284
            ],
            "projectId": [
                284
            ],
            "serializedConfig": [
                259
            ],
            "teamId": [
                284
            ],
            "templateId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TemplateGenerateInput": {
            "environmentId": [
                284
            ],
            "projectId": [
                284
            ],
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TemplateGuide": {
            "post": [
                284
            ],
            "video": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TemplateMetadata": {},
        "TemplatePublishInput": {
            "category": [
                284
            ],
            "demoProjectId": [
                284
            ],
            "description": [
                284
            ],
            "image": [
                284
            ],
            "readme": [
                284
            ],
            "teamId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TemplateService": {
            "config": [
                324
            ],
            "createdAt": [
                35
            ],
            "id": [
                95
            ],
            "templateId": [
                284
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                284
            ]
        },
        "TemplateServiceConfig": {},
        "TemplateServiceSourceEjectInput": {
            "projectId": [
                284
            ],
            "repoName": [
                284
            ],
            "repoOwner": [
                284
            ],
            "serviceIds": [
                284
            ],
            "upstreamUrl": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TemplateServicesConnection": {
            "edges": [
                327
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "TemplateServicesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                323
            ],
            "__typename": [
                284
            ]
        },
        "TemplateStatus": {},
        "TemplateVolume": {},
        "TrustedDomainVerificationData": {
            "domainMatch": [
                55
            ],
            "domainStatus": [
                25
            ],
            "__typename": [
                284
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
                284
            ]
        },
        "TwoFactorInfoCreateInput": {
            "token": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TwoFactorInfoSecret": {
            "secret": [
                284
            ],
            "uri": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "TwoFactorInfoValidateInput": {
            "token": [
                284
            ],
            "twoFactorLinkingKey": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "Upload": {},
        "UsageAnomaly": {
            "actedOn": [
                35
            ],
            "action": [
                337
            ],
            "actorId": [
                284
            ],
            "flaggedAt": [
                35
            ],
            "flaggedFor": [
                338
            ],
            "id": [
                95
            ],
            "__typename": [
                284
            ]
        },
        "UsageAnomalyAction": {},
        "UsageAnomalyFlagReason": {},
        "UsageLimit": {
            "customerId": [
                284
            ],
            "hardLimit": [
                98
            ],
            "id": [
                95
            ],
            "isOverLimit": [
                12
            ],
            "softLimit": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "UsageLimitRemoveInput": {
            "customerId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "UsageLimitSetInput": {
            "customerId": [
                284
            ],
            "hardLimitDollars": [
                98
            ],
            "softLimitDollars": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "User": {
            "agreedFairUse": [
                12
            ],
            "avatar": [
                284
            ],
            "banReason": [
                284
            ],
            "createdAt": [
                35
            ],
            "email": [
                284
            ],
            "featureFlags": [
                1
            ],
            "flags": [
                343
            ],
            "has2FA": [
                12
            ],
            "id": [
                95
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
                284
            ],
            "profile": [
                347
            ],
            "projects": [
                352,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "providerAuths": [
                354,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "registrationStatus": [
                251
            ],
            "riskLevel": [
                85
            ],
            "teams": [
                356,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "termsAgreedOn": [
                35
            ],
            "username": [
                284
            ],
            "workspace": [
                387
            ],
            "workspaces": [
                387
            ],
            "__typename": [
                284
            ]
        },
        "UserFlag": {},
        "UserFlagsRemoveInput": {
            "flags": [
                343
            ],
            "userId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "UserFlagsSetInput": {
            "flags": [
                343
            ],
            "userId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "UserKickbackEarnings": {
            "total_amount": [
                85
            ],
            "__typename": [
                284
            ]
        },
        "UserProfile": {
            "bio": [
                284
            ],
            "isPublic": [
                12
            ],
            "website": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "UserProfileResponse": {
            "avatar": [
                284
            ],
            "createdAt": [
                35
            ],
            "customerId": [
                284
            ],
            "id": [
                284
            ],
            "isTrialing": [
                12
            ],
            "name": [
                284
            ],
            "profile": [
                347
            ],
            "publicProjects": [
                349,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "publishedTemplates": [
                283
            ],
            "state": [
                284
            ],
            "totalDeploys": [
                98
            ],
            "username": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "UserProfileResponsePublicProjectsConnection": {
            "edges": [
                350
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "UserProfileResponsePublicProjectsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                156
            ],
            "__typename": [
                284
            ]
        },
        "UserProfileUpdateInput": {
            "bio": [
                284
            ],
            "isPublic": [
                12
            ],
            "website": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "UserProjectsConnection": {
            "edges": [
                353
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "UserProjectsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                156
            ],
            "__typename": [
                284
            ]
        },
        "UserProviderAuthsConnection": {
            "edges": [
                355
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "UserProviderAuthsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                195
            ],
            "__typename": [
                284
            ]
        },
        "UserTeamsConnection": {
            "edges": [
                357
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "UserTeamsConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                295
            ],
            "__typename": [
                284
            ]
        },
        "UserUpdateInput": {
            "avatar": [
                284
            ],
            "name": [
                284
            ],
            "username": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "Variable": {
            "createdAt": [
                35
            ],
            "environment": [
                61
            ],
            "environmentId": [
                284
            ],
            "id": [
                95
            ],
            "isSealed": [
                12
            ],
            "name": [
                284
            ],
            "plugin": [
                137
            ],
            "pluginId": [
                284
            ],
            "references": [
                284
            ],
            "service": [
                260
            ],
            "serviceId": [
                284
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                284
            ]
        },
        "VariableCollectionUpsertInput": {
            "environmentId": [
                284
            ],
            "projectId": [
                284
            ],
            "replace": [
                12
            ],
            "serviceId": [
                284
            ],
            "variables": [
                72
            ],
            "__typename": [
                284
            ]
        },
        "VariableDeleteInput": {
            "environmentId": [
                284
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "VariableUpsertInput": {
            "environmentId": [
                284
            ],
            "name": [
                284
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "value": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "VercelAccount": {
            "id": [
                284
            ],
            "integrationAuthId": [
                284
            ],
            "isUser": [
                12
            ],
            "name": [
                284
            ],
            "projects": [
                365
            ],
            "slug": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "VercelInfo": {
            "accounts": [
                363
            ],
            "__typename": [
                284
            ]
        },
        "VercelProject": {
            "accountId": [
                284
            ],
            "id": [
                284
            ],
            "name": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "Volume": {
            "createdAt": [
                35
            ],
            "id": [
                95
            ],
            "name": [
                284
            ],
            "project": [
                156
            ],
            "projectId": [
                284
            ],
            "volumeInstances": [
                376,
                {
                    "after": [
                        284
                    ],
                    "before": [
                        284
                    ],
                    "first": [
                        98
                    ],
                    "last": [
                        98
                    ]
                }
            ],
            "__typename": [
                284
            ]
        },
        "VolumeCreateInput": {
            "environmentId": [
                284
            ],
            "mountPath": [
                284
            ],
            "projectId": [
                284
            ],
            "serviceId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "VolumeInstance": {
            "createdAt": [
                35
            ],
            "currentSizeMB": [
                85
            ],
            "environment": [
                61
            ],
            "environmentId": [
                284
            ],
            "externalId": [
                284
            ],
            "id": [
                95
            ],
            "mountPath": [
                284
            ],
            "region": [
                284
            ],
            "service": [
                260
            ],
            "serviceId": [
                284
            ],
            "sizeMB": [
                98
            ],
            "state": [
                374
            ],
            "type": [
                372
            ],
            "volume": [
                366
            ],
            "volumeId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "VolumeInstanceBackup": {
            "createdAt": [
                35
            ],
            "creatorId": [
                284
            ],
            "expiresAt": [
                35
            ],
            "externalId": [
                284
            ],
            "id": [
                284
            ],
            "name": [
                284
            ],
            "referencedMB": [
                98
            ],
            "usedMB": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "VolumeInstanceBackupSchedule": {
            "createdAt": [
                35
            ],
            "cron": [
                284
            ],
            "id": [
                95
            ],
            "kind": [
                371
            ],
            "name": [
                284
            ],
            "retentionSeconds": [
                98
            ],
            "__typename": [
                284
            ]
        },
        "VolumeInstanceBackupScheduleKind": {},
        "VolumeInstanceType": {},
        "VolumeInstanceUpdateInput": {
            "mountPath": [
                284
            ],
            "serviceId": [
                284
            ],
            "state": [
                374
            ],
            "type": [
                372
            ],
            "__typename": [
                284
            ]
        },
        "VolumeState": {},
        "VolumeUpdateInput": {
            "name": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "VolumeVolumeInstancesConnection": {
            "edges": [
                377
            ],
            "pageInfo": [
                132
            ],
            "__typename": [
                284
            ]
        },
        "VolumeVolumeInstancesConnectionEdge": {
            "cursor": [
                284
            ],
            "node": [
                368
            ],
            "__typename": [
                284
            ]
        },
        "WebhookCreateInput": {
            "filters": [
                284
            ],
            "projectId": [
                284
            ],
            "url": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "WebhookUpdateInput": {
            "filters": [
                284
            ],
            "url": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "Withdrawal": {
            "amount": [
                85
            ],
            "createdAt": [
                35
            ],
            "customerId": [
                284
            ],
            "id": [
                95
            ],
            "status": [
                383
            ],
            "updatedAt": [
                35
            ],
            "withdrawalAccountId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "WithdrawalAccount": {
            "customerId": [
                284
            ],
            "id": [
                95
            ],
            "platform": [
                382
            ],
            "platformDetails": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "WithdrawalPlatformTypes": {},
        "WithdrawalStatusType": {},
        "WorkflowId": {
            "workflowId": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "WorkflowResult": {
            "error": [
                284
            ],
            "status": [
                386
            ],
            "__typename": [
                284
            ]
        },
        "WorkflowStatus": {},
        "Workspace": {
            "avatar": [
                284
            ],
            "banReason": [
                284
            ],
            "createdAt": [
                35
            ],
            "customer": [
                26
            ],
            "discordRole": [
                284
            ],
            "id": [
                95
            ],
            "name": [
                284
            ],
            "preferredRegion": [
                284
            ],
            "referredUsers": [
                246
            ],
            "slackChannelId": [
                284
            ],
            "subscriptionModel": [
                288
            ],
            "supportTierOverride": [
                292
            ],
            "team": [
                295
            ],
            "__typename": [
                284
            ]
        },
        "WorkspaceUpdateInput": {
            "avatar": [
                284
            ],
            "name": [
                284
            ],
            "preferredRegion": [
                284
            ],
            "__typename": [
                284
            ]
        },
        "customerTogglePayoutsToCreditsInput": {
            "isWithdrawingToCredits": [
                12
            ],
            "__typename": [
                284
            ]
        }
    }
}