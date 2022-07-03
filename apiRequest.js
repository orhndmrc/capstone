const { Browser, Page, ElementHandle, Frame } = require('puppeteer-core')
const { ElementSelector } = require('bluestone/ptLibrary/class/ElementSelector')
const bluestoneFunc = require('bluestone').func
const assert = require('assert')
const axios = require('axios').default
const urlLib = require('url')
const urljoin = require('url-join');
const { url } = require('inspector')
/**
 * Authenticate via API
 * @param {string} username username Ex: "Admin"
 * @param {string} password password Ex: ''
 * @param {string} baseUrl the host name. : Ex: http://172.22.4.39
 * @returns 
 */
const authenticate = async function (username, password, baseUrl) {
    try {
        if (password == 'undefined') password = ''
        let url = urljoin(baseUrl, "/AspenTech/APM/Security/api/Login")
        let res = await axios.post(url, { "Name": username, "Password": password },
            { headers: { 'Content-Type': 'application/json' } }
        )
        return res.data
    } catch (error) {
        return Promise.reject(`Unable to authenticate via API. Username:${username} Password:${password} url:${url} Error: ${error} `)
    }
}
/**
 * Get Agent Id By Name
 * @param {string} username UserName
 * @param {string} password Password
 * @param {string} baseUrl Base Url: Ex: http://172.22.4.39
 * @param {string} agentName Agent Name
 * @returns {string}
 */
const getAgentIdByName = async function (username, password, baseUrl, agentName) {

    let url = urljoin(baseUrl, "/AspenTech/APM/Data/api/MachineLearningAgents?$select=RowId,AgentType,AgentCategory,Disabled,LastTrainingDate,LastIterationCount,Id,Name,Description,KpitrainingScore,KpiholdoutScore,FkGranularity,IsFavorite,IsLiveAgent,CreatedOn,LastModified,Attributes,OutOfSync,OutOfSyncStatus,FkTemplate,FkSensorGroup,RowVersion&$expand=Template($select=RowId,Id),MachineLearningAgentWorkItemMappings($select=IncludedInLearning,FkEvent,DetectedLeadTimeInterval,Detected;$expand=Event($select=FkProblemCode)),MachineLearningAgentObjectMappings($select=FkObject,OverallStartDate,OverallEndDate;$expand=Object($select=FkObjectType,Name,Id,RowId,FkSite,Description,StartDate,EndDate)),LiveAgentCbms($select=FkLiveAgent,FkMachineLearningAgent;$expand=LiveAgent($select=Disabled,RowId))")
    let authRes = await authenticate(username, password, baseUrl)
    let accessToken = authRes.accessToken
    let res
    // Request #17
    try {
        res = await axios.get(url,
            {
                "headers": {
                    "Authorization": "Bearer " + accessToken,
                }
            }
        )
    } catch (error) {

    }
    let objAgents = res.data
    for (let i = 0; i < objAgents.length; i++) {
        if (objAgents[i].Name == agentName) {
            return (objAgents[i].RowId)
        }
    }
    return Promise.reject(`Unable to find agent: ${agentName}`)

}
/**
 * Delete Agent By Name
 * @param {string} username UserName
 * @param {string} password Password
 * @param {string} baseUrl Base Url: Ex: http://172.22.4.39
 * @param {string} agentName Agent Name
 * @returns {string}
 */
exports.deleteAgentByName = async function (username, password, baseUrl, agentName) {
    let s1 = await __deleteAgentByName(username, password, baseUrl, agentName)
    return s1
}
async function __deleteAgentByName(username, password, baseUrl, agentName) {
    let authRes = await authenticate(username, password, baseUrl)
    let accessToken = authRes.accessToken
    try {
        let rowId = await getAgentIdByName(username, password, baseUrl, agentName)
        let url = urljoin(baseUrl, "AspenTech/APM/Data/api/MachineLearningAgents/", rowId.toString())
        let res = await axios.delete(url,
            {
                "headers": {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                }
            }
        )
        return 'Delete Success'
    } catch (error) {
        return `Delete Agent Failed ${error}`
    }
}
/**
 * Create Sample Anomaly Agent By Name
 * @param {string} username UserName
 * @param {string} password Password
 * @param {string} baseUrl Base Url: Ex: http://172.22.4.39
 * @param {string} agentName Agent Name
 * @returns {string}
 */
exports.createAnomalyAgentByName = async function (username, password, baseUrl, agentName) {
    let authRes = await authenticate(username, password, baseUrl)
    let accessToken = authRes.accessToken
    try {
        await __deleteAgentByName(username, password, baseUrl, agentName)
        let url = urljoin(baseUrl, "/AspenTech/APM/Data/api/MachineLearningAgents")
        let res = await axios.post(url, { "Id": `${agentName}`, "Name": `${agentName}`, "AgentCategory": 1, "AgentType": "GMM", "MaxIterations": 20, "FkTemplate": 1, "FkSensorGroup": 1, "TrainingDateRanges": [{ "startDate": "2014-12-06T07:50:00.000Z", "endDate": "2015-12-01T07:50:00.000Z" }], "FkGranularity": 13, "MachineLearningAgentObjectMappings": [{ "FkObject": 5, "OverallStartDate": "12/06/2014 2:50:00 AM", "OverallEndDate": "12/01/2015 2:50:00 AM" }], "MachineLearningAgentWorkItemMappings": [{ "FkEvent": 1, "FkObject": 5, "PostFailureInterval": 2, "PreFailureInterval": 30, "FkPostFailureGranularity": 21, "FkPreFailureGranularity": 21, "IncludedInLearning": true, "EventDate": "2013-02-26T00:00:00Z", "FkEventType": 1, "FkProblemCode": null }, { "FkEvent": 2, "FkObject": 5, "PostFailureInterval": 2, "PreFailureInterval": 30, "FkPostFailureGranularity": 21, "FkPreFailureGranularity": 21, "IncludedInLearning": true, "EventDate": "2014-02-26T00:00:00Z", "FkEventType": 1, "FkProblemCode": null }, { "FkEvent": 3, "FkObject": 5, "PostFailureInterval": 2, "PreFailureInterval": 30, "FkPostFailureGranularity": 21, "FkPreFailureGranularity": 21, "IncludedInLearning": true, "EventDate": "2015-02-26T00:00:00Z", "FkEventType": 1, "FkProblemCode": null }], "Attributes": "{\"profile\":{\"ActionType\":\"train\",\"AgentAlgo\":\"GMM\",\"FilterLength\":3,\"MinAlertDuration\":2,\"EventThreshold\":0.5,\"OperatingState\":3,\"DistanceType\":\"euclidean\",\"IterDroprRate\":5,\"Iterations\":200,\"TrainRange\":[[\"2014-12-06T07:50:00.000Z\",\"2015-12-01T07:50:00.000Z\"]],\"AgentType\":\"anomaly\"}}" },
            {
                "headers": {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                }
            }
        )
        return 'Create Agent Successfully'
    } catch (error) {
        return `Create Agent Failed ${error}`
    }
}

/**
 * Get asset template by name
 * @param {string} username 
 * @param {string} password 
 * @param {string} baseUrl 
 * @param {string} name 
 * @returns {string}
 */
async function getTemplateByName(username, password, baseUrl, name) {
    let authRes = await authenticate(username, password, baseUrl)
    let accessToken = authRes.accessToken
    let res
    try {
        let url = urljoin(baseUrl, "/AspenTech/APM/Data/api/Templates?$select=RowId,Id,Name,Description,FkTemplateFolder,FkImage,TemplateType,OfflineCondition,ExcludeHours,RowVersion,OfflineCondition,ExcludeHours")
        res = await axios.get(url,
            {
                "headers": {
                    "Authorization": "Bearer " + accessToken,
                }
            }
        )
    } catch (error) {
        return Promise.reject('Unable to get template by name ')
    }
    let objAgents = res.data
    for (let i = 0; i < objAgents.length; i++) {
        if (objAgents[i].Name == name) {
            return (objAgents[i].RowId)
        }
    }
    return Promise.reject(`Unable to find template: ${name}`)
}
async function __deleteTemplateByName(username, password, baseUrl, name) {
    let authRes = await authenticate(username, password, baseUrl)
    let accessToken = authRes.accessToken
    try {
        let rowId = await getTemplateByName(username, password, baseUrl, name)
        let url = urljoin(baseUrl, "AspenTech/APM/Data/api/Templates/", rowId.toString())
        let res = await axios.delete(url,
            {
                "headers": {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                }
            }
        )
        return 'Delete Success'
    } catch (error) {
        return `Delete Agent Failed ${error}`
    }
}

/**
 * Delete Template By Name
 * @param {string} username UserName
 * @param {string} password Password
 * @param {string} baseUrl Base Url: Ex: http://172.22.4.39
 * @param {string} agentName Agent Name
 * @returns {string}
 */
exports.deleteTemplateByName = async function (username, password, baseUrl, agentName) {
    return await __deleteTemplateByName(username, password, baseUrl, agentName)
}