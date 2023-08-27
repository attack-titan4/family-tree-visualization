import React from 'react';
import Tree from 'react-d3-tree';

function FamilyTree({ data, onEditClick }) {
    const treeData = {
        name: 'Your Family',
        children: data,
    };

    const containerStyles = {
        width: '100%',
        height: '500px',
    };

    const renderCustomNode = ({ nodeDatum }) => {
        const circleRadius = 40;
        const fontSize = '14px';
        const textY = 5;
        const relationshipText = nodeDatum.relationship ? `(${nodeDatum.relationship})` : '';
        console.log(nodeDatum)

        return (
            <g>
                <circle r={circleRadius} fill="" />
                <text y={textY} fontSize={fontSize} textAnchor="middle">
                    {`${nodeDatum.name} (${nodeDatum.relationship})`} 
                </text>
                <text
                    x={circleRadius * 1.5} 
                    y={-circleRadius * 1.5}
                    fontSize={fontSize}
                    textAnchor="middle"
                    fill="blue"
                    style={{ cursor: 'pointer' }}
                    onClick={() => onEditClick(nodeDatum.name, nodeDatum.id, nodeDatum.relationship)}
                >
                    Edit
                </text>
            </g>
        );
    };

    return (
        <div style={containerStyles}>
            <Tree
                data={treeData}
                orientation="vertical"
                translate={{ x: 200, y: 90 }}
                separation={{ siblings: 8.0, nonSiblings: 1.00 }}
                nodeSvgShape={{ shape: 'circle', shapeProps: { r: 50 } }}
                renderCustomNodeElement={renderCustomNode}
            />
        </div>
    );
}

export default FamilyTree;