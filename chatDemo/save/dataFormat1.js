/**
 * Created by Echo on 2015/11/12.
 */
option = {
    timeline: {
        data: [20121012, 20130213]
    },
    options: [{
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            y: 'bottom',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:['ֱ�ӷ���','�ʼ�Ӫ��','���˹��',
                '��Ƶ���','��������','�ٶ�','�ȸ�',
                '��Ӧ','����']
        },
        xAxis : [
            {
                type : 'category',
                splitLine : {show : false},
                data : ['��һ','�ܶ�','����','����','����','����','����']
            }
        ],
        yAxis : [
            {
                type : 'value',
                position: 'right'
            }
        ],
        series : [
            {
                name:'ֱ�ӷ���',
                type:'bar',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'�ʼ�Ӫ��',
                type:'bar',
                tooltip : {trigger: 'item'},
                stack: '���',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'���˹��',
                type:'bar',
                tooltip : {trigger: 'item'},
                stack: '���',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'��Ƶ���',
                type:'bar',
                tooltip : {trigger: 'item'},
                stack: '���',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'��������',
                type:'line',
                data:[862, 1018, 964, 1026, 1679, 1600, 1570]
            },

            {
                name:'��������ϸ��',
                type:'pie',
                tooltip : {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                center: [160,130],
                radius : [0, 50],
                itemStyle :��{
                    normal : {
                        labelLine : {
                            length : 20
                        }
                    }
                },
                data:[
                    {value:1048, name:'�ٶ�'},
                    {value:251, name:'�ȸ�'},
                    {value:147, name:'��Ӧ'},
                    {value:102, name:'����'}
                ]
            }
        ]
    }]
};
