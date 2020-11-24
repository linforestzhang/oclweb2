import React from 'react';
import {
  AcUnit as AsteriskIcon,
} from '@material-ui/icons';
import ReleasedChip from './ReleasedChip';

const SEPARATOR = '/'
const ResourceVersionLabel = props => {
  return (
    <div className='col-sm-12 no-side-padding'>
      <span className='resource-label'>
        <span style={{paddingTop: '5px'}}>
          <AsteriskIcon fontSize='small' style={{width: '14px'}} />
        </span>
        <span>{props.owner}</span>
        <span>{SEPARATOR}</span>
        <span>{props.short_code}</span>
        <span>{SEPARATOR}</span>
        <span className='resource-name'>[{props.version}]</span>
      </span>
      {
        props.released &&
        <span style={{marginLeft: '10px'}}>
          <ReleasedChip size='small' />
        </span>
      }
    </div>
  )
}

export default ResourceVersionLabel;
