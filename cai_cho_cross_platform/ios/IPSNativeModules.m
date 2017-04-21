//
//  IPSNativeModules.m
//  cai_cho_cross_platform
//
//  Created by admin on 4/21/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "IPSNativeModules.h"
#import <React/RCTLog.h>

@implementation IPSNativeModules
RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(getDbPath:(NSString *)location complete:(RCTResponseSenderBlock) complete){
  NSString *documentsDirectory = [self getPrivateDocsDir:location];
  documentsDirectory = [documentsDirectory stringByAppendingString:@"/"];
  complete(@[documentsDirectory]);
}

-(NSString *) getPrivateDocsDir: (NSString *) location{
  NSArray *paths =NSSearchPathForDirectoriesInDomains(NSLibraryDirectory, NSUserDomainMask, YES);
  NSString *documentsDirectory = [paths objectAtIndex:0];
  documentsDirectory = [documentsDirectory stringByAppendingPathComponent:location];
  
  NSError *error;
  [[NSFileManager defaultManager] createDirectoryAtPath: documentsDirectory
                            withIntermediateDirectories: YES attributes:nil error:&error];
  
  if (error) {
    RCTLogInfo(@"create folder success");
  }else{
    RCTLogInfo(@"folder already exist");
  }
  
  return documentsDirectory;
}


@end
